import { getApiMovies } from "@/services/apiMovies";
import { useQuery } from "@tanstack/react-query";
interface Movie {
  movie_id: string;
  movie_name: string;
  movie_length: number;
  movie_genre: string[];
  movie_classfication: string;
  movie_director: string;
  movie_actress: string[];
  movie_release: Date;
  movie_trailer: string;
  movie_language: number;
  movie_description: string;
  movie_poster: string;
}
export function useMovies() {
  const { isLoading, data: movies } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getApiMovies,
  });
  return { isLoading, movies };
}
