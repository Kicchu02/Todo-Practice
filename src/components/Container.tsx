import React from "react";
import { MainContent } from "./MainContent";
import { SideContent } from "./SideContent";

export const Container = (): React.ReactElement => {
  return (
    <div className="flex flex-row items-end gap-12">
      <SideContent />
      <MainContent />
    </div>
  );
};
