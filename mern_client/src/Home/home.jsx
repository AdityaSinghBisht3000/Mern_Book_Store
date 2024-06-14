import React from "react";
import Banner from "../components/Banner";
import BestSellerBook from "./BestSellerBook";

const Home = () => {
  return (
    <div>
      {/* <div className="h-screen">home</div>;
      <div className="h-screen bg-red-300"></div> */}
      <Banner />
      <BestSellerBook />
    </div>
  );
};

export default Home;
