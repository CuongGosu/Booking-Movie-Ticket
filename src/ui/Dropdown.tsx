import { NavLink } from "react-router-dom";

interface ItemSubMenu {
  title: string;
  url: string;
}
interface DropdownProps {
  subMenus: ItemSubMenu[];
}
const Dropdown: React.FC<DropdownProps> = ({ subMenus }) => {
  const styleSub =
    "hover:text-text-highlight rounded-t py-2 px-4 text-xs text-text-secondary w-full block ";
  const styleDropdown =
    "absolute top-16 w-40 bg-secondary-background border-t-2 border-text-secondary hidden group-hover:block z-50";
  return (
    <ul className={`${styleDropdown}`}>
      {subMenus.map((submenu: ItemSubMenu, index: number) => (
        <NavLink to={submenu.url} className={`${styleSub}`} key={index}>
          {submenu.title}
        </NavLink>
      ))}
    </ul>
  );
};
export default Dropdown;
