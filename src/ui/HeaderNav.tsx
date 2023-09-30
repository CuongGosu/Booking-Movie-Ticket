import React from "react";
import HeaderLink from "./HeaderLink";
import menuItems from "@/utils/menuItems";
interface PropsHeaderNav {
  className: string;
}

const HeaderNav: React.FC<PropsHeaderNav> = ({ className }) => {
  const flexBetween = "flex items-center justify-between";
  const hoverNav =
    "border-b-2 border-secondary-background hover:border-text-highlight h-full";
  return (
    <nav className={`${className} h-full`}>
      <ul className={`${flexBetween} w-4/5 h-full gap-0`}>
        {menuItems.map((menu, index) => {
          return (
            <HeaderLink
              items={menu}
              key={index}
              className={`${flexBetween} ${hoverNav}`}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
