-- Enable Row Level Security on leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own leads" ON public.leads;
DROP POLICY IF EXISTS "Users can insert their own leads" ON public.leads;
DROP POLICY IF EXISTS "Users can update their own leads" ON public.leads;
DROP POLICY IF EXISTS "Users can delete their own leads" ON public.leads;

-- Create new policies using the suggested format
CREATE POLICY select_own_leads ON public.leads
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY insert_own_leads ON public.leads
FOR INSERT
WITH CHECK (user_id = auth.uid());

CREATE POLICY update_own_leads ON public.leads
FOR UPDATE
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

CREATE POLICY delete_own_leads ON public.leads
FOR DELETE
USING (user_id = auth.uid()); 