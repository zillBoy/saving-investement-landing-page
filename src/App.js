/**
 * React Dependencies
 */
import React from "react";

/**
 * Internal Dependencies
 */
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Navbar from "./components/Navbar/Navbar";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import GradientLine from "./components/GradientLine/GradientLine";
import SectionText from "./components/Text/SectionText";
import SavingsGrid from "./components/Grid/SavingsGrid";

const App = () => {
  return (
    <>
      <ContentWrapper className="bg-neutral-900">
        <Navbar />
        <HeroHeader />
      </ContentWrapper>

      <GradientLine />

      <ContentWrapper className="bg-zinc-100">
        <SectionText kicker="Savings" title="Send, spend and save smarter" />
        <SavingsGrid />
      </ContentWrapper>
    </>
  );
};

export default App;
