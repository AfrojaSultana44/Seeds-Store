import React from "react";
import About from "../../components/Home/About";
import CountDown from "../../components/Home/CountDown";
import Products from "../../components/Home/Products";
import ActivitySection from "../../components/Home/ActivitySection";
import HeroSlider from "../../components/Home/HeroSlider";
import MediaCentreSlider from "../../components/Home/MediaCentreSlider";
import HeroSlider2 from "../../components/Home/HeroSlider2";
import ContactSection from "../../components/Home/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <About />
      <CountDown />
      <Products />
      <MediaCentreSlider />
      <ActivitySection />
      <ContactSection/>
    </>
  );
};

export default HomePage;
