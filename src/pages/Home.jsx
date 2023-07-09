import React from "react";
import Navbar from "../components/Navbar2";
import Hero from "../components/Hero";
import PopularProduct from "../components/PopularProduct";
import GiftCards from "../components/GiftCards";
import ManageSection from "../components/ManageSection";
import Banner from "../components/Banner";
import SupportedPayementSection from "../components/SupportedPayementSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden  ">
      {/* <Navbar /> */}
      <Hero />
      <PopularProduct />
      <GiftCards />
      <ManageSection />
      <Banner />
      <SupportedPayementSection />
      <Footer />
      
    </div>
  );
};

export default Home;
