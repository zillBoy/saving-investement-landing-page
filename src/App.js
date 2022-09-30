/**
 * React Dependencies
 */
import React from "react";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <ContentWrapper className="bg-neutral-900">
        <Navbar />
        <HeroHeader />
      </ContentWrapper>

      <div className="w-full h-4 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-200"></div>

      <ContentWrapper>
        <div>Hello world</div>
      </ContentWrapper>
    </>
  );
};

export default App;
