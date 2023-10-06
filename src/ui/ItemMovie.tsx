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
  type: 'home' | 'movie';
}
const ItemMovie: React.FC<ItemMovieProps> = ({ movie, type }) => {
  const base_img = ' w-full rounded-lg';
  const styles_img = {
    home: `${base_img} h-96`,
    movie: `${base_img} h-72`,
  };
  const base_title =
    'mb-1 max-w-[250px] overflow-hidden whitespace-nowrap text-lg font-semibold';
  const styles_title = {
    home: `${base_title} text-white`,
    movie: `${base_title} text-black`,
  };
  const base_text = 'mb-1 text-base';
  const styles_text = {
    home: `${base_text} text-white`,
    movie: `${base_text} text-black`,
  };
  return (
    <li className="group list-none">
      <img
        src={movie.movie_poster}
        alt={movie.movie_name}
        className={`${styles_img[type]}`}
      />
      <div className="flex flex-col p-4 text-center transition-all duration-300">
        <h2 className={`${styles_title[type]}`}>
          {movie.movie_name.length > 17
            ? movie.movie_name.substring(0, 17) + '...'
            : movie.movie_name}
        </h2>
        {movie.movie_length ? (
          <p className={`${styles_text[type]}`}>
            {movie.movie_length} phút <span> | </span>
            <span
              className={`font-bold ${getColorForClassification(
                movie.movie_classfication,
              )}`}
            >
              {movie.movie_classfication}
            </span>
          </p>
        ) : null}

        <p className={`${styles_text[type]} mb-3`}>
          Khởi chiếu: {format(new Date(movie.movie_release), 'dd-MM-yyyy')}
        </p>
        {type === 'home' ? (
          <div className="flex justify-center space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button type="small">Trailer</Button>
            <Button type="small">Đặt vé</Button>
          </div>
        ) : (
          <div className="flex justify-center space-x-2 transition-opacity duration-300">
            <Button type="default">Đặt vé</Button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ItemMovie;
