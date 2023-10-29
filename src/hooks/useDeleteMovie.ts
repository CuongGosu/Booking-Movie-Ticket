import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteMovie as deleteMovieApi } from '@/services/apiMovies';

export function useDeleteMovie() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteMovie } = useMutation({
    mutationFn: deleteMovieApi,
    onSuccess: () => {
      toast.success('Xóa phim thành công');
      queryClient.invalidateQueries({
        queryKey: ['movies'],
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { isDeleting, deleteMovie };
}
