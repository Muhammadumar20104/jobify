import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineGlobal } from "react-icons/ai";
import { selectDarkMode, toggleDarkMode } from "../../feature/DarkSlice";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import ProfileMenu from "../../Components/ProfileMenu";

function AdminNavbar() {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const [localMode, setLocalMode] = useState(null);

  // const handleToggleDarkMode = () => {
  //   setLocalMode((prevMode) => !prevMode);
  // };

  // useEffect(() => {
  //   if (localMode !== null) {
  //     dispatch(toggleDarkMode(localMode));
  //     localStorage.setItem("Mode", JSON.stringify(localMode));
  //   }
  // }, [localMode, dispatch]);

  // useEffect(() => {
  //   const storedMode = localStorage.getItem("Mode");
  //   if (storedMode !== null) {
  //     setLocalMode(JSON.parse(storedMode));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (localMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [localMode]);

  return (
    <div className="bg-slate-100 flex items-center justify-between px-4 dark:bg-slate-800 dark:text-white h-14 py-8">
      <div>
        <AiOutlineGlobal className="text-3xl cursor-pointer" />
      </div>
      <div className="flex gap-4  items-center">
        <div className="relative flex w-fit items-center rounded-full">
          <button
            className="flex items-center gap-2 px-3 py-2 text-white dark:text-white bg-transparent dark:bg-slate-800"
            // onClick={handleToggleDarkMode}
          >
            <FiMoon className="relative z-10 text-lg md:text-sm k" />
            <span className="relative z-10">Light</span>
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2"
            // onClick={handleToggleDarkMode}
          >
            <FiSun className="relative z-10 text-lg md:text-sm" />
            <span className="relative z-10">Dark</span>
          </button>
          <div
            className={`absolute inset-0 z-0 flex ${
              localMode ? "justify-end" : "justify-start"
            }`}
          >
            <motion.span
              layout
              transition={{ type: "spring", damping: 15, stiffness: 250 }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
            />
          </div>
        </div>
        <div className="flex items-center">
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;

{
  /* */
}
