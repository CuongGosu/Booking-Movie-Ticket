import supabase from '@/services/supabase';

export async function isAdmin() {
  const { data: user } = await supabase.from('profile').select('*').single();
  if (user?.role === 'admin') return user;
  return null;
}
