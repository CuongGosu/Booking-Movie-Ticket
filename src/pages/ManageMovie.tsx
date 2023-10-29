import RowTable from '@/ui/RowTable';
import AddMovie from '@/components/Admin/Movie/AddMovie';
import MovieTable from '@/components/Admin/Movie/MovieTable';
import MovieTableOperations from '@/components/Admin/Movie/MovieTableOperations';

function Cabins() {
  return (
    <div>
      <RowTable type="horizontal">
        <h1 className="text-4xl font-bold text-white">Danh sách phim</h1>
        <MovieTableOperations />
      </RowTable>

      <RowTable>
        <MovieTable />
        <AddMovie />
      </RowTable>
    </div>
  );
}

export default Cabins;
