import React from "react";
import { colors } from "./colorConstants";
import { Container } from "./components/Container";
import { WebAppNavBar } from "./components/WebAppNavBar";
import "./index.css";

export const App = (): React.ReactElement => {
  return (
    <div className={`min-h-screen w-screen px-12 bg-[${colors.background}]`}>
      <WebAppNavBar />
      <Container />
    </div>
  );
};

export default App;
