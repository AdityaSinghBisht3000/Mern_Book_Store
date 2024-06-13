import React from "react";
import BannerCard from "../Home/BannerCard";
const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full ">
          <h2 className="text-5xl font-bold leading-sung text-black">
            Buy and Sell your Books{" "}
            <span className=" text-blue-700">for the best prices</span>
          </h2>
          <p className="md:w-4/5 ">
            But the closer Warsaw creeps toward liberation, the more dangerous
            life becomes for the women and their families—and escape may not be
            possible for everyone. As the destruction rages around them, Zofia
            must fight to save her friend and preserve her culture and community
            using the only weapon they have left—literature.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        <div>right side</div>
      </div>
      <BannerCard />
    </div>
  );
};

export default Banner;
