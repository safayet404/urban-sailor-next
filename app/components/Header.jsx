"use client"

import MegaMenuWithHover from "./NavbarLayout"; // This is for large screens
import SmallNavbar from "./SmallNavbar"; // This is for small screens
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import OfferText from "./OfferText";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto container">
      <OfferText />
      {isSmallScreen ? (
        <SmallNavbar />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto my-auto p-4">
          <div>
            <MegaMenuWithHover />
          </div>
          <div className="mt-4">
            <h1 className="text-center mx-auto text-black font-bold text-xl md:text-2xl uppercase my-auto">
              Urban Sailor
            </h1>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search here"
                  className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <button className="text-gray-700 text-2xl">
                <GrFavorite />
              </button>
              <button className="text-gray-700 text-2xl">
                <HiOutlineShoppingBag />
              </button>
              <button className="text-gray-700 text-2xl">
                <CgProfile />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;