import React from 'react'
import MegaMenuWithHover from './NavbarLayout'
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";

const SmallNavbar = () => {
  return (
    <div className='mx-auto container'>
      <div className='flex flex-col'>
        <div className="mt-4">
          <h1 className="text-center mx-auto text-black font-bold text-xl md:text-2xl uppercase my-auto">
            Urban Sailor
          </h1>
        </div>
        <div>
          <div className='flex items-start justify-between px-2'>
            <div className=''>
              <MegaMenuWithHover />
            </div>
            <div className=''>
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center space-x-4 mt-4">


                  <button className="text-gray-700 text-2xl">
                    <GrFavorite />
                  </button>
                  <button className="text-gray-700 text-2xl">
                    <HiOutlineShoppingBag />
                  </button>
                  <button className="text-gray-700 text-2xl">
                    <LuUserRound />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto'>
            <div className="relative w-full px-4 mx-auto mt-2 mb-4">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-300 rounded-full w-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <span className="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-500">
                <CiSearch />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SmallNavbar