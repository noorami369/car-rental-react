import React from "react";
import Header from "../components/Header";
import LuxuryCarsSearch from "../components/LuxuryCarsSearch";
import FeaturedVehicles from "../components/FeaturedVehicles";
import DoYouOwnCar from "../components/DoYouOwnCar";
import WhatOurCustomersSay from "../components/WhatOurCustomersSay";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <LuxuryCarsSearch />
      <FeaturedVehicles />
      <DoYouOwnCar />
      <WhatOurCustomersSay />
    </div>
  );
};

export default Home;
