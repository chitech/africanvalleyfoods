-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert their own leads" ON public.leads;
DROP POLICY IF EXISTS "Allow authenticated users to insert messages" ON public.contact_messages;

-- Create new policies for public submissions
CREATE POLICY "Allow public to insert leads"
ON public.leads
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public to insert messages"
ON public.contact_messages
FOR INSERT
TO public
WITH CHECK (true);

-- Add rate limiting columns
ALTER TABLE public.leads
ADD COLUMN ip_address TEXT,
ADD COLUMN submission_count INTEGER DEFAULT 1,
ADD COLUMN last_submission TIMESTAMP WITH TIME ZONE DEFAULT NOW();

ALTER TABLE public.contact_messages
ADD COLUMN ip_address TEXT,
ADD COLUMN submission_count INTEGER DEFAULT 1,
ADD COLUMN last_submission TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create function to check rate limits
CREATE OR REPLACE FUNCTION check_rate_limit(
    p_ip_address TEXT,
    p_email TEXT,
    p_table_name TEXT
) RETURNS BOOLEAN AS $$
DECLARE
    v_count INTEGER;
    v_last_submission TIMESTAMP WITH TIME ZONE;
BEGIN
    IF p_table_name = 'leads' THEN
        SELECT COUNT(*), MAX(last_submission)
        INTO v_count, v_last_submission
        FROM public.leads
        WHERE (ip_address = p_ip_address OR email = p_email)
        AND last_submission > NOW() - INTERVAL '1 hour';
    ELSE
        SELECT COUNT(*), MAX(last_submission)
        INTO v_count, v_last_submission
        FROM public.contact_messages
        WHERE (ip_address = p_ip_address OR email = p_email)
        AND last_submission > NOW() - INTERVAL '1 hour';
    END IF;

    -- Allow up to 3 submissions per hour from the same IP/email
    RETURN v_count < 3;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 