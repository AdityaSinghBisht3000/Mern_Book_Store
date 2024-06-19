import React from "react";
import Banner from "../components/Banner";
import BestSellerBook from "./BestSellerBook";
import Favbook from "./Favbook";
import PromoBanner from "./PromoBanner";
import Otherbooks from "./Otherbooks";
import Review from "./Review";
import { Footer } from "flowbite-react";

const Home = () => {
  return (
    <div>
      {/* <div className="h-screen">home</div>;
      <div className="h-screen bg-red-300"></div> */}
      <Banner />
      <BestSellerBook />
      <Favbook />
      <PromoBanner />
      <Otherbooks />
      <Review />
      
    </div>
  );
};

export default Home;
