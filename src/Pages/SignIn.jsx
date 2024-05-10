import React, { useState } from "react";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiBagSimpleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { selectLoginCheck, toggleLogin } from "../feature/LoginSlice";

function SignIn() {
  const isLogedIn = useSelector(selectLoginCheck);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ok");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message);
      }

      const token = await response.json();
      console.log(token.data.password);
      localStorage.setItem("token", token.data.password);
      setFormData({
        email: "",
        password: "",
      });

      setError(""); // Clear any previous errors
      const localdata = localStorage.getItem("token");
      console.log(localdata);
      if (localdata != null) {
        navigate("/");
        console.log("Sccuess");
        console.log("First Console =>", isLogedIn);
        dispatch(toggleLogin());
        console.log("LasT Console =>", isLogedIn);
      } else {
        navigate("/signin");
        dispatch(toggleLogin(false));
      }
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };
  return (
    <div className="w-[100%] md:h-[100vh] 5sm:h-[200vh] flex md:flex-row sm:flex-col sm:gap-6">
      <div className="md:w-[50%] sm:block xs:hidden relative">
        <div className="h-[100vh] bg-[url('./assets/Images/SignUp.jpg')] bg-center bg-no-repeat">
          <div className="h-[100%] bg-slate-900/60 backdrop-brightness-50  ">
            <div className="w-full justify-center xs:hidden sm:flex  gap-6  bottom-10 absolute">
              <div className="flex flex-col items-center">
                <div className="px-1 py-1 rounded-md backdrop-blur-sm bg-white/20">
                  <PiBagSimpleBold className="text-white text-4xl cursor-pointer " />
                </div>
                <div className="text-white">
                  <CountUp start={0} end={175324}></CountUp>
                </div>
                <div className="text-xs  text-gray-400">Live Jobs</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-1 py-1 rounded-md backdrop-blur-sm bg-white/20">
                  <HiBuildingOffice2 className="text-white text-4xl cursor-pointer " />{" "}
                </div>
                <div className="text-white">
                  <CountUp start={0} end={97354}></CountUp>
                </div>
                <div className="text-xs  text-gray-400">Companies</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="px-1 py-1 rounded-md backdrop-blur-sm bg-white/20">
                  <PiBagSimpleBold className="text-white text-4xl cursor-pointer " />
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
      <div className="w-[100%] md:w-[50%] h-[100vh] lg:px-12 md:px-6 xs:px-4 align-items-center  flex flex-col justify-evenly">
        <div>
          <div className="flex items-center font-bold font-serif text-2xl gap-2">
            <PiBagSimpleBold className="text-sky-700" />
            Jobify
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="text-4xl">Sign in</div>
            <div className="text-gray-400 4sm:text-base xs:text-xs">
              Don't have account ?
              <span className="text-sky-500 cursor-pointer">
                <NavLink to="/signup">Create Account</NavLink>
              </span>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <div className="w-[100%] flex flex-col justify-between gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className=" border py-2 px-2 w-[100%] rounded-lg"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border py-2 px-2 w-[100%] rounded-lg"
                  placeholder="Password"
                />
              </div>
              {/* <div className="flex justify-between">
              <div>
                <input type="checkbox" className="cursor-pointer" />
                <span className="text-gray-400 px-2 4sm:text-base xs:text-xs">
                  Remember Me
                </span>
              </div>
              <div>
                <span className="text-sky-300 cursor-pointer 4sm:text-base xs:text-xs">
                  Forget Password
                </span>
              </div>
            </div> */}
              <div className="border py-2 px-2 w-[100%] rounded-md flex justify-center bg-[#0a65cc]">
                <button
                  type="submit"
                  className="flex items-center text-white gap-4"
                >
                  Sign in <FaArrowRight />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
