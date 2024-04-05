"use client";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiSearch } from "react-icons/hi";
import { MdKeyboardArrowLeft, MdOutlineArrowDropDown } from "react-icons/md";
import ProfileSidebar from "./ProfileSidebar";
import { RiSettings5Fill } from "react-icons/ri";
import DuaIcon from "./shared/DuaIcon";

const Navbar = ({
  title,
  isHome = false,
}: {
  title: string;
  isHome?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-10 2xl:grid-cols-12 items-center justify-center mt-1.5">
      <h1
        className={`flex items-center justify-start gap-2 xl:gap-0 text-textGrayColor md:text-textColor text-2xl mt-3 col-span-7 md:col-span-4  lg:col-span-7 xl:col-span-7 2xl:col-span-8 whitespace-nowrap ${
          !isHome && "col-span-full"
        }`}
      >
        <MdKeyboardArrowLeft size={34} className="inline md:hidden" />
        <div className="block xl:hidden">
          <DuaIcon />
        </div>
        {title}
      </h1>

      {isHome && (
        <>
          <div className="relative col-span-6 md:col-span-4 lg:col-span-1 2xl:col-span-2 mt-1.5 hidden md:flex justify-end mr-5 lg:ml-36">
            <input
              type="search"
              placeholder="Search by Dua Name"
              className="py-3 px-3 pr-4 block w-[300px] rounded-md border sm:text-sm focus:border focus:border-primaryColor focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center bg-bgGrayColor m-1 rounded-sm pointer-events-none">
              <HiSearch className="h-5 w-5 flex items-center justify-center ml-3 text-gray-400 " />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 lg:col-span-1 2xl:hidden flex items-center justify-end ">
            <RiSettings5Fill size={24} className="text-primaryColor" />
          </div>
          <div
            className="col-span-2 md:col-span-1 lg:col-span-1 2xl:col-span-2 hidden md:flex items-center justify-end cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <CgProfile className="text-textGrayColor" size={24} />
            <MdOutlineArrowDropDown size={24} className="text-textGrayColor" />

            {open && <ProfileSidebar />}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Navbar;
