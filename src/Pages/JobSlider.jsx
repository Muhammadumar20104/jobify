import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CategoriesCard from "../Components/CategoriesCard";
import { SlScreenDesktop } from "react-icons/sl";
import { SiAdobeindesign } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";

function JobSlider() {
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
  ];

  return (
    <div className="lg:w-[800px] md:w-[600px] 5sm:w-[500px] sm:w-[400px] ">
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={true}
        arrows={false}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {jobCategories.map((category, index) => (
          <div key={index} className="flex gap-4 ml-2">
            <CategoriesCard category={category} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default JobSlider;
