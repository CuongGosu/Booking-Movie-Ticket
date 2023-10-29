import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '@/utils/constants';

const StyledPagination = 'w-full flex items-center justify-between';

const P = 'text-base ml-2';

const Buttons = 'flex gap-3';

const PaginationButton =
  'bg-gray-200 text-base font-semibold rounded-full flex items-center justify-center gap-1 px-4 py-2 transition duration-300';

function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className={StyledPagination}>
      <p className={P}>
        Showing {Math.min((currentPage - 1) * PAGE_SIZE + 1, count)} to{' '}
        {Math.min(currentPage * PAGE_SIZE, count)} of {count} results
      </p>

      <div className={Buttons}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={PaginationButton}
        >
          <HiChevronLeft /> Previous
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={PaginationButton}
        >
          Next <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
