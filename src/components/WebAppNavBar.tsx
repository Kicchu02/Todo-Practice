import React from "react";
import { colors } from "../colorConstants";
import { IconButton } from "../common/components/IconButton";

export const WebAppNavBar = (): React.ReactElement => {
  const LeftElements = (): React.ReactElement => {
    return (
      <div className="flex flex-row items-center gap-6">
        <IconButton
          src={"/src/assets/HamburgerMenu.svg"}
          size={24}
          color={colors.iconDefault}
        />
        <div className="flex flex-row items-center gap-1 h-8">
          <img src="/src/assets/Union.svg" width={32} height={32} />
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.04em",
              textAlign: "left",
              textDecoration: "none",
              color: colors.labelPrimary,
            }}
          >
            DoIt
          </p>
        </div>
      </div>
    );
  };

  const RightElements = (): React.ReactElement => {
    return (
      <div className="flex flex-row items-center gap-6">
        <IconButton
          src={"/src/assets/Search.svg"}
          size={24}
          color={colors.iconDefault}
        />
        <IconButton
          src={"/src/assets/AppGrid.svg"}
          size={24}
          color={colors.iconDefault}
        />
      </div>
    );
  };

  return (
    <div
      className={`flex flex-row items-center justify-between py-3 bg-[${colors.background}]`}
    >
      <LeftElements />
      <RightElements />
    </div>
  );
};
