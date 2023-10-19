import supabase from './supabase';

interface SignUpInput {
  fullname: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  gender: string;
  date_of_birth: string;
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
  if (!session) {
    return null;
  } else {
    const { data } = await supabase.auth.getUser();

    if (!data) return null;

    return data?.user;
  }
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// interface UpdateUserInput {
//   password?: string;
//   fullName?: string;
//   avatar?: File;
// }
// export async function updateCurrentUser({
//   password,
//   fullName,
//   avatar,
// }: UpdateUserInput) {
//   let updateData;
//   if (password) updateData = { password };
//   if (fullName) updateData = { data: { fullName } };

//   const { data, error } = await supabase.auth.updateUser(updateData);

//   if (error) throw new Error(error.message);
//   if (!avatar) return data;

//   // 2. Upload the avatar image
//   const fileName = `avatar-${data.user.id}-${Math.random()}`;

//   const { error: storageError } = await supabase.storage
//     .from('avatars')
//     .upload(fileName, avatar);

//   if (storageError) throw new Error(storageError.message);

//   // 3. Update avatar in the user
//   const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
//     data: {
//       avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
//     },
//   });

//   if (error2) throw new Error(error2.message);
//   return updatedUser;
// }
