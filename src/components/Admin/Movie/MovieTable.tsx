import React from 'react';
import Spinner from '@/ui/Spinner';
import MovieRow from '@/ui/MovieRow';
import { useMovies } from '@/hooks/useMovies';
import Table from '@/ui/Table';
import Menus from '@/ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '@/ui/Empty';
// import Pagination from '@/ui/Pagination';

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

function MovieTable() {
  const { isLoading, movies } = useMovies();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  console.log(movies);
  if (!movies?.length) return <Empty resourceName="phim" />;

  const filterValue = searchParams.get('phim') || 'Tất cả';

  let filteredMovies: Movie[] = [];

  if (filterValue === 'Tất cả') {
    filteredMovies = movies;
  }

  const filterDate = new Date('2023-09-29');

  if (filterValue === 'Phim đang chiếu') {
    filteredMovies = movies?.filter((movie) => {
      const releaseDate = new Date(movie.movie_release);
      return releaseDate <= filterDate;
    });
  }

  if (filterValue === 'Phim sắp chiếu') {
    filteredMovies = movies?.filter((movie) => {
      const releaseDate = new Date(movie.movie_release);
      return releaseDate > filterDate;
    });
  }
  return (
    <Menus>
      <Table columns="grid-cols-6">
        <Table.Header>
          <div></div>
          <div className="text-lg font-bold">Tên phim</div>
          <div className="text-lg font-bold">Độ dài phim</div>
          <div className="text-lg font-bold">Ngày phát hành</div>
          <div className="text-lg font-bold">Trạng thái</div>
        </Table.Header>

        <Table.Body
          data={filteredMovies}
          render={(movies) => <MovieRow movies={movies} key={movies.id} />}
        />
        {/* <Table columns="grid-cols-6" footer={<Pagination count={count} />}> */}
      </Table>
    </Menus>
  );
}

export default MovieTable;
