import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Spinner from '@/ui/Spinner';
import ItemMovie from '@/ui/ItemMovie';

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

interface ListMovieShowingProps {
  movies: Movie[] | undefined;
  isLoading: boolean;
}

const ListMovieShowing: React.FC<ListMovieShowingProps> = ({
  movies,
  isLoading,
}) => {
  const filterMovies = (movies: Movie[]) => {
    const filterDate = new Date('2023-09-29');
    return movies?.filter((movie) => {
      const releaseDate = new Date(movie.movie_release);
      return releaseDate <= filterDate;
    });
  };

  const filteredMovies = filterMovies(movies || []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-4 gap-x-16">
          {filteredMovies?.map((movie) => (
            <ItemMovie movie={movie} type="movie" key={movie.movie_id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListMovieShowing;
