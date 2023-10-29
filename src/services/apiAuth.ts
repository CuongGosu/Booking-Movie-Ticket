import supabase from './supabase';
interface SignUpInput {
  fullname: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  gender: string;
  date_of_birth: string | null;
  cmnd: string;
}

interface SignInInput {
  email: string;
  password: string;
}

export async function signup({
  fullname,
  email,
  password,
  address,
  phone,
  gender,
  date_of_birth,
  cmnd,
}: SignUpInput) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        address,
        phone,
        gender,
        date_of_birth,
        cmnd,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: SignInInput) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  const { data } = await supabase.auth.getUser();
  if (!data) return null;
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  console.log('dang xuat???');
  if (error) throw new Error(error.message);
}
interface UpdateUserInput {
  fullname?: string;
  password?: string;
  address?: string;
  phone?: string;
  gender?: string;
  date_of_birth?: string | null;
  cmnd?: string;
}
export async function updateCurrentUser({
  fullname,
  password,
  address,
  phone,
  gender,
  date_of_birth,
  cmnd,
}: UpdateUserInput) {
  let updateData = {};
  if (password) updateData = { password };
  if (fullname) updateData = { data: { fullname } };
  if (address) updateData = { data: { address } };
  if (phone) updateData = { data: { phone } };
  if (gender) updateData = { data: { gender } };
  if (date_of_birth) updateData = { data: { date_of_birth } };
  if (cmnd) updateData = { data: { cmnd } };

  // const { data, error } = await supabase.auth.updateUser(updateData);
  const { error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      // avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
