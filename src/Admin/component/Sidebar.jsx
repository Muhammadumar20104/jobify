import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineBorderColor } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { MdContentPasteSearch } from "react-icons/md";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Sidebar({ hover, setHover }) {
  const [active, setActive] = useState(-1);
  const routes = [
    {
      path: "/auth/",
      name: "DashBoard",
      icon: <RxDashboard />,
    },
    {
      path: "/auth/order",
      name: "Order",
      icon: <MdOutlineBorderColor />,
    },
    {
      path: "/auth/company",
      name: "Company",
      icon: <BsBuildings />,
    },
    {
      path: "/auth/candidate",
      name: "Candidate",
      icon: <IoIosPerson />,
    },
    {
      path: "/auth/jobs",
      name: "Jobs",
      icon: <PiHandbagSimpleBold />,
    },
    {
      path: "/auth/jobcategory",
      name: "Job Category",
      icon: <BiCategory />,
    },
    {
      path: "/auth/jobrole",
      name: "Job Role",
      icon: <MdContentPasteSearch />,
    },
    {
      path: "/auth/country",
      name: "Country",
      icon: <MdOutlineAddLocationAlt />,
    },
    {
      path: "/auth/settings",
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      path: "/signin",
      name: "Logout",
      icon: <IoIosLogOut />,
    },
  ];
  const handleClick = (index) => {
    setActive(index); // Set activeIndex to the clicked item's index
  };
  return (
    <>
      <div className="w-[100%] flex flex-col justify-evenly text-black h-screen">
        <div className="flex text-base font-inter p-3 items-center gap-2 border-b-2">
          <div>
            <PiHandbagSimpleBold className="text-xl"/>
          </div>

          {hover && <div>JobPilot</div>}
        </div>
        {routes.map((route, index) => (
          <NavLink
            to={route.path}
            key={route.name}
            onClick={() => handleClick(index)}
          >
            <div
              key={route.name}
              className={`flex gap-2 items-center ${
                active == index ? "bg-white border-r-4 border-blue-800" : ""
              }   font-inter text-xl p-3  hover:bg-white hover:border-r-4 border-blue-800`}
            >
              <div>{route.icon}</div>
              {hover && <div className="text-base duration-500 delay-200">{route.name}</div>}
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
