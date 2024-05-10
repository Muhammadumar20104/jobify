import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { PiBagSimpleBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      localStorage.setItem("token", data.password);
      console.log("Registration successful:", data);
      setAlertMessage("Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/signin");
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Optionally, handle error response (e.g., show an error message to the user)
    }
    console.log(formData);
  };
  return (
    <div className="w-[100%] md:h-[100vh] 5sm:h-[200vh] flex md:flex-row sm:flex-col sm:gap-6">
      <div className="md:w-[50%] relative">
        <div className="h-[100vh] bg-[url('./assets/Images/SignUp.jpg')] bg-center bg-no-repeat">
          <div className="h-[100%] bg-slate-900/60 backdrop-brightness-50  ">
            <div className="w-full justify-center xs:hidden sm:flex  gap-6  bottom-10 absolute">
              <div className="flex flex-col items-center">
                <div className="px-1 py-1 rounded-md backdrop-blur-sm bg-white/20">
                  <PiBagSimpleBold className="text-white text-4xl  " />
                </div>
                <div className="text-white">
                  <CountUp start={0} end={175324}></CountUp>
                </div>
                <div className="text-xs  text-gray-400">Live Jobs</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-1 py-1 rounded-md backdrop-blur-sm bg-white/20">
                  <HiBuildingOffice2 className="text-white text-4xl  " />{" "}
                </div>
                <div className="text-white">
                  <CountUp start={0} end={97354}></CountUp>
                </div>
                <div className="text-xs  text-gray-400">Companies</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-1 py-1 rounded-md backdrop-blur-sm bg-white/20">
                  <PiBagSimpleBold className="text-white text-4xl  " />
                </div>
                <div className="text-white">
                  <CountUp start={0} end={7532}></CountUp>
                </div>
                <div className="text-xs  text-gray-400">New Jobs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] h-[100vh] lg:px-12 md:px-6 xs:px-4 align-items-center  flex flex-col justify-around">
        <div>
          <div className="flex items-center font-bold font-serif text-2xl gap-2">
            <PiBagSimpleBold className="text-sky-700" />
            Jobify
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-center items-start ">
            <div className=" 4sm:text-3xl xs:text-2xl">Create Account</div>
            <div className="text-gray-400 4sm:text-base xs:text-xs">
              Already have account ?{" "}
              <span className="text-sky-500">
                <NavLink to={"/signin"}>login</NavLink>
              </span>
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center bg-gray-200 rounded-lg gap-2 py-2 ">
            <div className="flex justify-center text-gray-500 4sm:text-base xs:text-xs">
              CREATE ACCOUNT AS A{" "}
            </div>
            <div className="flex gap-4">
              <div className="">
                <button className="flex items-center bg-[#191e58ec] text-white py-2 lg:px-12 md:px-6 rounded-lg 5sm:px-8 4sm:px-4 xs:px-4 gap-2 sm:text-sm xs:text-xs">
                  <FaRegUserCircle /> Candidate
                </button>
              </div>
              <div>
                <button className="flex items-center bg-[#191e58ec] text-white py-2 lg:px-12 md:px-6 rounded-lg  5sm:px-8 4sm:px-4 px-4 gap-2 sm:text-sm xs:text-xs">
                  <HiBuildingOffice2 />
                  Employey
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="w-[100%] flex justify-between gap-2">
                <input
                  type="text"
                  name="name"
                  className=" border py-2 px-2 w-[100%] rounded-lg"
                  placeholder="Full Name"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {/* <input
                type="text"
                className="border py-2 px-2 w-[50%] rounded-lg"
                placeholder="Username"
              /> */}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className=" border py-2 px-2 w-[100%] rounded-lg "
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  className=" border py-2 px-2 w-[100%] rounded-lg  "
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              {/* <div>
              <input
                type="password"
                className=" border py-2 px-2 w-[100%] rounded-lg  "
                placeholder="Confrim Password"
              />
            </div> */}
              {/* <div className="4sm:text-base xs:text-xs">
                <input type="checkbox" /> Read And Agree with your
                <span className="text-sky-300"> {""}Term of Service</span>
              </div> */}
              <div className="border py-2 px-2 w-[100%] rounded-md flex justify-center bg-[#0a65cc]">
                <button
                  type="submit"
                  className="flex items-center text-white gap-4"
                >
                  Create Account <FaArrowRight />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
