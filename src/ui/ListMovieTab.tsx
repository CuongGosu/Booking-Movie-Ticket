import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Spinner from '@/ui/Spinner';
import ItemMovie from '@/ui/ItemMovie';
import { Autoplay } from 'swiper/modules';

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

interface ListMovieTabProps {
  movies: Movie[] | undefined;
  isLoading: boolean;
  activeTab: 'nowPlaying' | 'upcoming';
}

const ListMovieTab: React.FC<ListMovieTabProps> = ({
  movies,
  isLoading,
  activeTab,
}) => {
  const filterMovies = (
    movies: Movie[],
    activeTab: 'nowPlaying' | 'upcoming',
  ) => {
    const filterDate = new Date('2023-09-15');
    return movies?.filter((movie) => {
      const releaseDate = new Date(movie.movie_release);
      if (activeTab === 'nowPlaying') {
        return releaseDate <= filterDate;
      } else {
        return releaseDate >= filterDate;
      }
    });
  };

  const filteredMovies = filterMovies(movies || [], activeTab);

  return (
    <div className="container mx-auto xl:w-1170">
      {isLoading ? (
        <Spinner />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="swiperTabMovie"
        >
          {filteredMovies?.map((movie) => (
            <SwiperSlide key={movie.movie_id}>
              <ItemMovie movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ListMovieTab;
