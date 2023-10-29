import { useMoveBack } from '../hooks/useMoveBack';

const StyledPageNotFound =
  'h-screen bg-gray-50 flex items-center justify-center';

const Box =
  'bg-white border border-gray-100 rounded-md p-12 flex-grow text-center';
const Heading = 'text-2xl font-bold mb-8';

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className={StyledPageNotFound}>
      <div className={Box}>
        <h1 className={Heading}>Trang bạn đang tìm kiếm không tồn tại</h1>
        <button
          onClick={moveBack}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          &larr; Trở về
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
