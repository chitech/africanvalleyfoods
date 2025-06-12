import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function generateVerificationToken(email: string): Promise<string> {
  const token = Math.random().toString(36).substring(2, 15);
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // Token expires in 24 hours

  await supabase
    .from('verification_tokens')
    .insert({
      email,
      token,
      expires_at: expiresAt,
    });

  return token;
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify?token=${token}&email=${encodeURIComponent(email)}`;
  
  // Use Supabase's built-in email service
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: verificationUrl,
      data: {
        token,
        type: 'form_verification'
      }
    }
  });

  if (error) {
    console.error('Error sending verification email:', error);
    throw error;
  }
}

export async function verifyToken(token: string, email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('verification_tokens')
    .select('*')
    .eq('token', token)
    .eq('email', email)
    .single();

  if (error || !data) return false;

  // Check if token is expired
  if (new Date(data.expires_at) < new Date()) return false;

  // Delete used token
  await supabase
    .from('verification_tokens')
    .delete()
    .eq('token', token);

  return true;
} 