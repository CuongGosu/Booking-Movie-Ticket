import { HiEye, HiTrash } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Modal from '@/ui/Modal';
import Menus from '@/ui/Menus';
import ConfirmDelete from '@/ui/ConfirmDelete';
import { useDeleteMovie } from '@/hooks/useDeleteMovie';
import { format } from 'date-fns';
import { Chip } from '@material-tailwind/react';

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
interface MovieRowProps {
  movies: Movie;
  key: string;
}

function MovieRow({ movies, key }: MovieRowProps) {
  const navigate = useNavigate();
  const { deleteMovie, isDeleting } = useDeleteMovie();
  let movieStatus: string = '';
  const filterDate = new Date('2023-09-29');
  const releaseDate = new Date(movies.movie_release);
  if (releaseDate <= filterDate) {
    movieStatus = 'showing';
  } else {
    movieStatus = 'upComing';
  }

  return (
    <div
      className="grid grid-cols-6 items-center gap-6 border-b border-gray-100 px-6 py-4"
      key={key}
    >
      <img
        src={movies.movie_poster}
        className="h-14 w-24 object-cover object-center"
        alt={movies.movie_name}
      />
      <div className="font-semibold text-gray-600">{movies.movie_name}</div>
      <div className="font-semibold text-gray-600">
        {movies.movie_length} phút
      </div>

      <div className="flex flex-col gap-2">
        <span>{format(new Date(movies.movie_release), 'dd-MM-yyyy')}</span>
      </div>

      <Chip
        size="sm"
        variant="ghost"
        value={movieStatus}
        color={movieStatus === 'showing' ? 'green' : 'amber'}
      />
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={movies.movie_id} />
          <Menus.List id={movies.movie_id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/movie/${movies.movie_id}`)}
            >
              Chi tiết
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Xóa</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={movies.movie_name}
            disabled={isDeleting}
            onConfirm={() => deleteMovie(movies.movie_id)}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default MovieRow;
