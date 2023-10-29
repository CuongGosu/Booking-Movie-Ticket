import { useEffect, RefObject } from 'react';

function useOutsideClick(
  ref: RefObject<HTMLElement>,
  handler: ((event: MouseEvent) => void) | undefined,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler?.(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useOutsideClick;
