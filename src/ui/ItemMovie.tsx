import React from 'react';
import { format } from 'date-fns';
import Button from './Button';
import { getColorForClassification } from '@/utils/helper';
interface ItemMovieProps {
  movie: {
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
  };
}
const ItemMovie: React.FC<ItemMovieProps> = ({ movie }) => {
  return (
    <li className="group">
      <img
        src={movie.movie_poster}
        alt={movie.movie_name}
        className="h-96 w-full rounded-lg"
      />
      <div className="flex flex-col justify-end p-4 transition-all duration-300 ">
        <h2 className="mb-1 max-w-[250px] overflow-hidden whitespace-nowrap text-lg font-semibold text-white">
          {movie.movie_name.length > 20
            ? movie.movie_name.substring(0, 20) + '...'
            : movie.movie_name}
        </h2>

        <p className="mb-1 text-base text-white">
          {movie.movie_length} phút <span> | </span>
          <span
            className={`font-bold ${getColorForClassification(
              movie.movie_classfication,
            )}`}
          >
            {movie.movie_classfication}
          </span>
        </p>
        <p className="mb-3 text-base text-white">
          {format(new Date(movie.movie_release), 'EEE, MMM dd yyyy')}
        </p>
        <div className="flex justify-center space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button type="small">Trailer</Button>
          <Button type="small">Đặt vé</Button>
        </div>
      </div>
    </li>
  );
};

export default ItemMovie;
