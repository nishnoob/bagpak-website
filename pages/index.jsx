import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Products from "../components/Products";
import USPSection from "../components/USPSection";

function HomePage() {
  return (
    <>
      <style jsx>
        {`
          div {
            color: red;
          }
        `}
      </style>
      <HeroSection />
      <USPSection />
      <AboutUs />
      <Products />
      <Footer />
    </>
  );
}

export default HomePage