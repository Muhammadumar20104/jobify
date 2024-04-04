import React from "react";
import Dropdown from "../Components/Dropdown";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiBagSimpleBold, PiHandbagSimpleBold } from "react-icons/pi";
import JobsDropdown from "../Components/JobDropDown";
import { CiSearch } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import ProfileMenu from "../Components/ProfileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import baglogo from "../assets/Images/Bug logo.svg"

function Navbar() {
  return (
    <div className="flex flex-col w-[100%]  relative z-10">
      <div className="flex justify-between xlg:px-24 lg:px-12 sm:px-6 items-center py-2">
        <div className="lg:order-1 ">
          <ul className="hidden gap-4 text-gray-500  lg:flex">
            <li className="hover:text-sky-500 cursor-pointer">Home</li>
            <li className="hover:text-sky-500 cursor-pointer">Find Job</li>
            <li className="hover:text-sky-500 cursor-pointer">Companies</li>
            <li className="hover:text-sky-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-sky-500 cursor-pointer">My Job</li>
          </ul>
          <div className="lg:hidden md:block">
            <CiMenuBurger className="text-3xl font-bold" />
          </div>
        </div>
        <div className="lg:order-2 sm:order-first">
          <ul className="flex gap-4 items-center flex-wrap">
            <li className="flex items-center gap-2 text-lg">
              <FaPhoneVolume /> 03019666491
            </li>
            <li className="">
              <Dropdown />
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-[100%]  justify-between bg-[#0a65cc] py-5 xlg:px-24 lg:px-12 sm:px-6">
        <div className="flex  items-center gap-10 md:">
          <div className="flex items-center gap-2">
            <div>
              {/* <PiHandbagSimpleBold className="text-white text-2xl" /> */}
              <div><img src={baglogo} alt="" /></div>
            </div>
          </div>
          <div className="hidden items-center gap-6 border p-1   bg-white rounded-md md:flex">
            <div>
              <JobsDropdown />
            </div>
            <div>
              <hr className="h-10 w-[1px] bg-slate-700" />
            </div>
            <div className="flex items-center w-full bg-white">
              <div className="text-3xl text-sky-600 ">
                <CiSearch />
              </div>
              <div className="w-[100%] rounded-md">
                <input
                  type="text"
                  placeholder="Job Title ,Keywords"
                  className="py-4 px-4 w-[100%] "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-6">
            <div className="md:hidden">
              <CiSearch className="text-3xl text-white " />
            </div>
            <div>
              <HiOutlineBellAlert className="text-3xl text-white " />
            </div>
            <div>
              <BiMessageRoundedDetail className="text-3xl text-white" />
            </div>
            <div className="w-fit">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
      <hr  className="w-[100%] h-[0.1px] border-gray-50 "/>
    </div>
  );
}

export default Navbar;
