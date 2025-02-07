import React from "react";
import { colors } from "../colorConstants";

export const MainContent = (): React.ReactElement => {
  return (
    <div className={`py-6 gap-4 bg-[${colors.background}]`}>
      <div className="border-t border-white py-1 flex flex-col items-center">
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "16px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#142E159E",
          }}
        >
          To Do
        </p>

        <div className="flex flex-row items-center bg-gradient-to-r from-transparent to-transparent via-[rgba(53,121,55,0.1)]">
          <div className="pt-40 px-20 gap-48">
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "20px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#1B281BB8",
              }}
            >
              Add A Task
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
