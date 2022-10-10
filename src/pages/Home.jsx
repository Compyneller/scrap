import React from "react";
import CardComp from "../components/CardsComp/CardComp";
import ContactUs from "../components/ContactUs/ContactUs";
import Hero from "../components/Hero/Hero";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import SellYourScrap from "../components/SellYourScrap/SellYourScrap";
import SplideComp from "../components/Splide/SplideComp";
import Why from "../components/Why/Why";

const Home = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <CardComp />
      <Section2 />
      <Why />
      <SellYourScrap />
      <SplideComp />
      <ContactUs />
    </>
  );
};

export default Home;
