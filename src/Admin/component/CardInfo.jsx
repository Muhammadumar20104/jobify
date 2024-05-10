import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPerson } from 'react-icons/io';
function CardInfo() {
  return (
    <div className="w-full ">
        <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
          <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
            <IoIosPerson   className="text-2xl text-white" />
          </div>
          <div className="mx-5">
            <h4 className="text-2xl font-semibold text-gray-700">8,282</h4>
            <div className="text-gray-500">New Users</div>
          </div>
        </div>
      </div>
  )
}

export default CardInfo