import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function FooterTag({ text = "FooterTxt" }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="w-full flex gap-1 items-center"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <FaArrowRightLong className="text-white w-fit " style={{
        transition: "width 0.6s ease-in-out ",
        width: isActive ? "10%" : "0%",
      }} />
      <div className={`${isActive ? "text-white" : ""}`}>{text}</div>
    </div>
  );
}

export default FooterTag;
