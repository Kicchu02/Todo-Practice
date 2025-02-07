import React from "react";
import { colors } from "../colorConstants";

export interface MenuItemProps {
  iconSrc: string;
  label: string;
}

export const MenuItem = ({
  iconSrc,
  label,
}: MenuItemProps): React.ReactElement => {
  return (
    <div
      className={`flex flex-row items-center rounded-md py-2 px-4 gap-4 bg-[${colors.background}]`}
    >
      <img src={iconSrc} className="rounded-md" width={24} height={24} />
      <p>{label}</p>
    </div>
  );
};
