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
import InvestmentsGrid from "./components/Grid/InvestmentsGrid";
import CustomerGrid from "./components/Grid/CustomerGrid";
import FeatureCard from "./components/Card/FeatureCard";
import { gradientGridType, securityCard } from "./utils/constants";
import Footer from "./components/Footer/Footer";
import SubscribeForm from "./components/Form/SubscribeForm";

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

        <SectionText kicker="Investments" title="Invest for the Long Term" />
        <InvestmentsGrid />

        <CustomerGrid />

        <SectionText title="Top-notch Security for Your Peace Of Mind" />
        <FeatureCard
          {...securityCard}
          className={`mb-0 py-16 ${gradientGridType["secondary-gradient"]}`}
          titleClassName="text-white text-3xl"
          descriptionClassName="text-zinc-300"
          imageClassName="pt-12 sm:pt-0 sm:w-72"
        />

        <SubscribeForm />
      </ContentWrapper>

      <GradientLine />

      <ContentWrapper className="bg-neutral-900">
        <Footer />
      </ContentWrapper>
    </>
  );
};

export default App;
