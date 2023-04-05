import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Aboutus from "../../components/Aboutus/Aboutus";
import MainCarousel from "../../components/DemoCarousel/MainCarousel";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Banner />
        <Services />
        <Aboutus />
        <MainCarousel />
      </div>
    </div>
  );
};

export default Home;
