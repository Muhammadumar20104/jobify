import React from "react";
import JobSlider from "./JobSlider";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Button from "../Components/Button";
import CountUp from "react-countup";
function Home() {
  return (
    <div className="h-[100vh] bg-[url('./assets/Images/SignUp.jpg')] bg-center bg-no-repeat  ">
      <div className="h-[100vh] bg-slate-900/60 backdrop-brightness-50 flex justify-center items-center flex-col gap-4   ">
        <div className="text-[32px] 5sm:w-[55%]  flex flex-col  font-medium font-inter text-white justify-center items-center text-center container mx-auto">
          The <span className="font-extrabold font-inter ">#1 Job Portal</span>
          for Hiring or Finding your next job
          <p className="text-[16px] text-center font-extralight">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over{" "}
            <CountUp duration={2} start={0} end={10000}></CountUp> applications
            every single day
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col font-inter justify-start  md:gap-2 sm:gap-5 bg-white py-2 px-2 rounded-md md:w-fit 4sm:w-[70%]">
          <div className="flex justify-start items-center  w-auto">
            <div>
              <CiSearch className="text-sky-500 text-4xl" />
            </div>
            <div className="w-auto">
              <input
                type="text"
                className="py-2 px-2  w-auto"
                placeholder="Job Title,Keyword"
              />
            </div>
          </div>
          <div className="flex justify-start items-center  w-full">
            <div>
              <CiLocationOn className="text-sky-500 text-4xl" />
            </div>
            <div>
              <input
                type="text"
                className="py-2 px-2 "
                placeholder="Job Title,Keyword"
              />
            </div>
          </div>
          <div className="w-full">
            <Button
              text={"Find Job Now"}
              className="flex justify-center bg-[#0a65cc] text-white  w-[100%] items-center  rounded-md px-4 py-4"
            />
          </div>
        </div>
        <div className="hidden md:block ">
          <JobSlider />
        </div>
      </div>
    </div>
  );
}

export default Home;
