import React from "react";

function Button({ text, className }) {
  return (
    <div className="w-full">
      <div
        className={`${className} flex justify-center bg-[#0a65cc]   w-[100%] items-center  rounded-md`}
      >
        <button className="flex ">{text}</button>
      </div>
    </div>
  );
}

export default Button;
