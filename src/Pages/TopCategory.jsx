import React from "react";
import CategoriesCard from "../Components/CategoriesCard";
import { SlScreenDesktop } from "react-icons/sl";
import { SiAdobeindesign } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";

function TopCategory() {
  const jobCategories = [
    {
      name: "Software Development",
      position: "71 Open Positions",
      logo: <SlScreenDesktop />,
    },
    {
      name: "Graphic Design",
      position: "71 Open Positions",
      logo: <SiAdobeindesign />,
    },
    {
      name: "Data Analysis",
      position: "71 Open Positions",
      logo: <FaDatabase />,
    },
    {
      name: "Marketing",
      position: "71 Open Positions",
      logo: <SiCoinmarketcap />,
    },
    {
      name: "Customer Support",
      position: "71 Open Positions",
      logo: <RiCustomerService2Fill />,
    },
    {
      name: "Software Development",
      position: "71 Open Positions",
      logo: <SlScreenDesktop />,
    },
    {
      name: "Graphic Design",
      position: "71 Open Positions",
      logo: <SiAdobeindesign />,
    },
    {
      name: "Data Analysis",
      position: "71 Open Positions",
      logo: <FaDatabase />,
    },
  ];
  return (
    <div className="bg-[#e7f0fa]  ">
      <div className="flex flex-col md:pl-14  py-20 gap-6 container mx-auto">
        <div className="text-[32px] font-inter">Top Categories</div>
        <div className=" grid lg:grid-cols-4  md:grid-cols-3 5sm:grid-cols-2 sm:grid-cols-1 gap-5 ">
          {jobCategories.map((category, index) => (
            <div key={index} className="">
              <CategoriesCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// grid 2xl:grid-cols-4 lg:grid-cols-3  5sm:grid-cols-2 grid-cols-1 gap-[20px]
export default TopCategory;
