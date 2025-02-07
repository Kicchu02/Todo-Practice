import React from "react";
import { colors } from "../colorConstants";
import { SideBar } from "./SideBar";

export const SideContent = (): React.ReactElement => {
  return (
    <div
      className={`flex flex-col items-center w-72 h-96 bg-[${colors.backgroundPrimarySubtle}] `}
    >
      <p
        style={{
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "20px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: colors.iconDefault,
        }}
      >
        Hey, ABCD
      </p>
      <SideBar
        menuItems={[
          {
            iconSrc: "/src/assets/Clipboard.svg",
            label: "All Tasks",
          },
          {
            iconSrc: "/src/assets/Calender.svg",
            label: "Today",
          },
          {
            iconSrc: "/src/assets/Star.svg",
            label: "Important",
          },
          {
            iconSrc: "/src/assets/Map.svg",
            label: "Planned",
          },
          {
            iconSrc: "/src/assets/ProfileClipboard.svg",
            label: "Assigned to me",
          },
        ]}
      />
      <SideBar
        menuItems={[
          {
            iconSrc: "/src/assets/Plus.svg",
            label: "Add list",
          },
        ]}
      />
    </div>
  );
};
