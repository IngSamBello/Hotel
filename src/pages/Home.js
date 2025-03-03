import React from "react";

// components
import HeroSlider from "../components/HeroSlider";
import BoookForm from "../components/BookForm";
import Rooms from "../components/Rooms";

const Home = () => {
  return (
    <>
    <HeroSlider/>
    <div className="container mx-auto relative">
      <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30
      lg:-top-12 ">
    <BoookForm />
    </div>
    </div>
     
      <Rooms />
    </>
  );
};

export default Home;
