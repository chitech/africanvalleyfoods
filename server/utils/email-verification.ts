import { createClient } from '@supabase/supabase-js';
import { sendEmail } from './email';

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
  
  await sendEmail({
    to: email,
    subject: 'Verify your submission to African Valley Foods',
    html: `
      <h1>Verify Your Submission</h1>
      <p>Thank you for contacting African Valley Foods. Please click the link below to verify your submission:</p>
      <a href="${verificationUrl}">Verify Submission</a>
      <p>This link will expire in 24 hours.</p>
    `,
  });
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