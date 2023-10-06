import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
interface ItemSubMenu {
  title: string;
  url: string;
}
interface ItemMenu {
  title: string;
  url: string;
  submenu?: ItemSubMenu[];
}
interface HeaderLinkProps {
  items: ItemMenu;
  className: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ items, className }) => {
  const [dropdown, setDropdown] = useState(false);
  const hoverText = 'hover:text-text-highlight';
  return (
    <li className={`${className} group relative`}>
      {items.submenu ? (
        <div>
          <button
            className="uppercase"
            type="button"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
          </button>
          <Dropdown subMenus={items.submenu} />
        </div>
      ) : (
        <NavLink to={items.url} className={`${hoverText}`}>
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default HeaderLink;
