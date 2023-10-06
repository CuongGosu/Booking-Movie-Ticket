import React from 'react';
import { useMovies } from '@/hooks/useMovies';
import ListMovieShowing from '@/components/movieShowing/ListMovieShowing';
interface PropsMovieShowing {}

const MovieShowing: React.FC<PropsMovieShowing> = () => {
  const { isLoading, movies } = useMovies();

  return (
    <div className=" h-full bg-white">
      <div className="container mx-auto pt-7 xl:w-1170">
        <h1 className="mb-7 text-2xl font-bold uppercase">Phim đang chiếu</h1>
        <ListMovieShowing movies={movies} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default MovieShowing;
