import React from "react";
import { GoPersonAdd } from "react-icons/go";
import { FiUploadCloud } from "react-icons/fi";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { PiSealCheck } from "react-icons/pi";
import arrow from "../assets/Images/arrow-1.png";
import arrow2 from "../assets/Images/arrow-2.png";

function ProcessCard() {
  return (
    <div className="container mx-auto pb-20">
      <div className="  flex justify-center  gap-2 mt-10 pb-10">
        {/* <div className="bg-[url('./Components/Images/Arc.png')] bg-no-repeat object-fill w-28 img-fluid  "> */}
        <span className="text-[20px] 5sm:text-[40px] text-sky-600 font-inter font-medium  ">
          Jobify
        </span>
        {/* </div> */}
        <div className="text-[20px] 5sm:text-[40px] font-medium">
          Working Process
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-evenly sm:flex flex-col items-center md:grid grid-cols-2 gap-2 align-items-center  justify-items-center">
        <div className="relative group ">
          <div className="absolute z-10 md:block lg:translate-x-[75%] md:translate-x-[150%] sm:hidden">
            <img src={arrow} alt="" className="w-full" />
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center lg:w-[250px]  md:w-[400px] sm:w-[300px]  py-[24px]  px-[32px] rounded-2xl hover:bg-blue-100 ">
            <div className="text-[40px] text-sky-600 group-hover:text-white group-hover:bg-sky-600 p-4 rounded-full text-center">
              <GoPersonAdd />
            </div>
            <div className="text-[18px] font-inter text-center">
              Explore Opportunities
            </div>
            <div className="text-wrap text-[#9199a3] text-center">
              Browse through a diverse range of job listings tailored to your
              interests and expertise
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="relative group">
          <div className="absolute z-10 lg:block lg:translate-x-[65%] translate-y-16 sm:hidden">
            <img src={arrow2} alt="" className="w-full" />
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center  lg:w-[250px]  md:w-[400px] sm:w-[300px]  py-[24px]  px-[32px] rounded-2xl hover:bg-blue-100 ">
            <div className="text-[40px] text-sky-600 group-hover:text-white group-hover:bg-sky-600 p-4 rounded-full text-center">
              <FiUploadCloud />
            </div>
            <div className="text-[18px] font-inter text-center">
              Create Your Profile
            </div>
            <div className="text-wrap text-[#9199a3] text-center">
              Build a standout profile highlighting your skills, experience, and
              qualifications
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="relative group">
          <div className="absolute z-10 md:block lg:translate-x-[65%] md:translate-x-[150%] sm:hidden">
            <img src={arrow} alt="" className="w-full" />
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center lg:w-[250px]  md:w-[400px] sm:w-[300px]  py-[24px]  px-[32px] rounded-2xl hover:bg-blue-100 ">
            <div className="text-[40px] text-sky-600 group-hover:text-white group-hover:bg-sky-600 p-4 rounded-full text-center font-thin">
              <LiaSearchPlusSolid />
            </div>
            <div className="text-[18px] font-inter text-center">
              Apply with Ease
            </div>
            <div className="text-wrap text-[#9199a3] text-center">
              Effortlessly apply to jobs that match your preferences with just a
              few clicks
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="relative group">
          <div className="absolute z-10 lg:translate-x-[60%] sm:hidden">
            <img src={arrow} alt="" className="w-full" />
          </div>
          <div className=" flex flex-col gap-2 items-center justify-center lg:w-[250px]  md:w-[400px] sm:w-[300px]  py-[24px]  px-[32px] rounded-2xl hover:bg-blue-100 ">
            <div className="text-[40px] text-sky-600 group-hover:text-white group-hover:bg-sky-600 p-4 rounded-full text-center">
              <PiSealCheck />
            </div>
            <div className="text-[18px] font-inter text-center">
              Track Your Progress
            </div>
            <div className="text-wrap text-[#9199a3] text-center">
              Stay informed on your applications and manage your job-seeking
              journey effectively
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;
