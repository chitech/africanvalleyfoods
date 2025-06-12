-- Create verification_tokens table
CREATE TABLE public.verification_tokens (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    token TEXT NOT NULL UNIQUE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster lookups
CREATE INDEX idx_verification_tokens_token ON public.verification_tokens(token);
CREATE INDEX idx_verification_tokens_email ON public.verification_tokens(email);

-- Enable RLS
ALTER TABLE public.verification_tokens ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public to insert tokens
CREATE POLICY "Allow public to insert verification tokens"
ON public.verification_tokens
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow public to select tokens
CREATE POLICY "Allow public to select verification tokens"
ON public.verification_tokens
FOR SELECT
TO public
USING (true);

-- Create policy to allow public to delete tokens
CREATE POLICY "Allow public to delete verification tokens"
ON public.verification_tokens
FOR DELETE
TO public
USING (true); 