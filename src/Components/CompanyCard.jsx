import React from "react";
import logo from "../assets/Images/comlogo2.png";
import { CiLocationOn } from "react-icons/ci";
function CompanyCard() {
  return (
    <div className="  hover:shadow-2xl font-inter px-6 py-5  flex flex-col gap-3 border rounded-2xl  hover:border-sky-600  ease-in duration-200  delay-100 transition-all hover:-translate-y-[4px]">
      <div>
        <img src={logo} alt="" className="w-14" />
      </div>
      <div className="text-xl font-medium">DigitaL Point</div>
      <div className="flex items-center gap-1 text-gray-400">
        <CiLocationOn className="text-base" /> SadiqAbad
      </div>
      <div className="flex  gap-2 ">
        <div className="bg-[#e7f0fa] text-[12px] w-fit py-[1px] px-[6px] rounded-full">
          Security Service
        </div>
        <div className="bg-[#e7f0fa] text-[12px] w-fit py-[1px] px-[6px] rounded-full">
          92 Position
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
