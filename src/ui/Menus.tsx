import React, { createContext, useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import useOutsideClick from '@/hooks/useOutsideClick';

interface MenusContextType {
  openId: string;
  close: () => void;
  open: (id: string) => void;
  position: { x: number; y: number } | null;
  setPosition: (position: { x: number; y: number } | null) => void;
}

const MenusContext = createContext<MenusContextType | undefined>(undefined);

function Menus({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<string>('');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );

  const close = () => setOpenId('');
  const open = (id: string) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }: { id: string }) {
  const { openId, close, open, setPosition } = useContext(MenusContext)!;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === '' || openId !== id ? open(id) : close();
  }

  return (
    <button onClick={handleClick} className="bg-gray-0 rounded-sm border p-1">
      <HiEllipsisVertical />
    </button>
  );
}

function List({ id, children }: { id: string; children: React.ReactNode }) {
  const { openId, position, close } = useContext(MenusContext)!;
  const ref = useRef<HTMLUListElement>(null); // Thay thế HTMLUListElement bằng kiểu phần tử bạn đang sử dụng.
  useOutsideClick(ref, close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="bg-gray-0 fixed rounded-md border border-gray-100"
      style={{ right: position?.x, top: position?.y }}
      ref={ref as React.RefObject<HTMLUListElement>}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({
  children,
  icon,
  onClick,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  const { close } = useContext(MenusContext)!;

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex  w-full items-center gap-3 rounded-md border-none bg-white p-3 text-left text-base font-semibold hover:bg-text-highlight hover:text-white"
      >
        {icon}
        <span className="block">{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = function Menu({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-end">{children}</div>;
};

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
