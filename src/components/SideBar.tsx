import React from "react";
import { colors } from "../colorConstants";
import { MenuItem, MenuItemProps } from "./MenuItem";

interface SideBarProps {
  menuItems: MenuItemProps[];
}

export const SideBar = ({ menuItems }: SideBarProps): React.ReactElement => {
  return (
    <div className="w-60">
      <div className={`bg-[${colors.background}] p-6`}>
        {menuItems.map((menuItem) => (
          <MenuItem iconSrc={menuItem.iconSrc} label={menuItem.label} />
        ))}
      </div>
    </div>
  );
};
