import React from "react";
import { CiLocationOn } from "react-icons/ci";
import logo from "../assets/Images/comlogo2.png";
import { Link } from "react-router-dom";
import Button from "./Button";

function JobCard({ item }) {
  return (
    <div className="w-[100%] h-[285px] cursor-pointer justify-center font-inter flex flex-col gap-3 px-5 py-5 bg-white rounded-lg hover:border border-sky-600 hover:bg-[#e7f0fa] ease-in duration-200  delay-100 transition-all hover:-translate-y-[4px]">
      <div className="flex flex-col font-inter gap-2">
        <div className="text-xl font-medium">{item.job_title}</div>
        <div className="bg-green-100 text-green-700 w-fit p-1 text-xs rounded-sm font-bold font-inter">
          {item.position}
        </div>
        <div className="text-gray-400 font-extralight">{item.salary}</div>
      </div>
      {/* id  */}
      <div className="w-fit flex gap-2">
        <div className="w-fit flex items-center justify-center">
          <img src={logo} alt="logo" className="rounded-full w-14" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-semibold text-[16px] flex flex-wrap">
            {item.company_name}
          </div>
          <div className="flex items-center gap-1 text-sky-600">
            <CiLocationOn className="text-xl" /> {item.location_name}
          </div>
        </div>
      </div>
      {/* btn  */}
      <div>
        <Button
          text={"Apply Now"}
          className="bg-sky-600 font-bold text-white w-fit px-[12px] py-[5px] flex items-center  justify-center"
        />
      </div>
    </div>
  );
}

export default JobCard;
