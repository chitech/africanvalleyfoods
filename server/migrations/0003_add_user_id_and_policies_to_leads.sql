-- Add user_id column to leads table
ALTER TABLE public.leads
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Create policies for leads table
-- Policy for selecting leads (users can only see their own leads)
CREATE POLICY "Users can view their own leads"
ON public.leads
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy for inserting leads (users can only insert leads with their own user_id)
CREATE POLICY "Users can insert their own leads"
ON public.leads
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Policy for updating leads (users can only update their own leads)
CREATE POLICY "Users can update their own leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy for deleting leads (users can only delete their own leads)
CREATE POLICY "Users can delete their own leads"
ON public.leads
FOR DELETE
TO authenticated
USING (auth.uid() = user_id); 