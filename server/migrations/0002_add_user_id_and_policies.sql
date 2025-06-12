-- Add user_id column to contact_messages
ALTER TABLE public.contact_messages
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Create policies for contact_messages
CREATE POLICY "Allow authenticated users to select their own messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated 
USING (user_id = (select auth.uid()));

CREATE POLICY "Allow authenticated users to insert messages" 
ON public.contact_messages 
FOR INSERT 
TO authenticated 
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Allow authenticated users to update their own messages" 
ON public.contact_messages 
FOR UPDATE 
TO authenticated 
USING (user_id = (select auth.uid())) 
WITH CHECK (user_id = (select auth.uid()));

CREATE POLICY "Allow authenticated users to delete their own messages" 
ON public.contact_messages 
FOR DELETE 
TO authenticated 
USING (user_id = (select auth.uid())); 