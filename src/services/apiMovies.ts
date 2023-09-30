import supabase from "./supabase";
export async function getApiMovies() {
  const { data, error } = await supabase.from("movies").select("*");
  if (error) {
    console.log(error);
    throw new Error("Movies could not be loaded");
  }
  return data;
}
