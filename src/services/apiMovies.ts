import supabase from './supabase';
export async function getApiMovies() {
  const { data, error } = await supabase.from('movies').select('*');
  if (error) {
    console.log(error);
    throw new Error('Không thể tải phim');
  }
  return data;
}
export async function deleteMovie(id: string) {
  const { data, error } = await supabase
    .from('movies')
    .delete()
    .eq('movie_id', id);

  if (error) {
    console.error(error);
    throw new Error('Phim không thể xóa');
  }
  return data;
}
