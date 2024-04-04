import React from "react";

function CategoriesCard({ category }) {
  return (
    <div className="flex items-center font-inter  bg-white px-[16px] py-[5px] rounded-md gap-2 text-[20px] w-full h-[90px]">
      <div className="text-sky-800 text-[16px]">{category.logo}</div>
      <div>
        <div>{category.name}</div>
        <div className="text-sky-800 text-[14px]">{category.position}</div>
      </div>
    </div>
  );
}

export default CategoriesCard;
