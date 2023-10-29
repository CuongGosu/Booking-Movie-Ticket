import React, {
  createContext,
  cloneElement,
  useContext,
  useState,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { HiX } from 'react-icons/hi';
import useOutsideClick from '@/hooks/useOutsideClick';

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

const StyledModal = {
  base: 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-all duration-500',
};

const Overlay = {
  base: 'fixed top-0 left-0 w-full h-screen bg-opacity-80 backdrop-blur-md z-50 transition-all duration-500',
};

const Button = {
  base: 'bg-none border-none p-2 rounded-sm transform translate-x-2 transition duration-200 absolute top-4 right-6 hover:bg-gray-200',
  icon: 'w-6 h-6 text-gray-500',
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>('');

  const close = () => setOpenName('');
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens,
}: {
  children: React.ReactElement;
  opens: string;
}) {
  const { open } = useContext(ModalContext)!;

  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { openName, close } = useContext(ModalContext)!;
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, close);

  if (name !== openName) return null;

  return createPortal(
    <div className={Overlay.base}>
      <div ref={ref} className={StyledModal.base}>
        <button className={Button.base} onClick={close}>
          <HiX className={Button.icon} />
        </button>

        {cloneElement(children as React.ReactElement, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
