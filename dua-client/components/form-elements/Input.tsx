import React from "react";
import { HiSearch } from "react-icons/hi";

const Input = ({
  isIcon,
  className,
}: {
  isIcon: boolean;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="search"
        placeholder="Search by Dua Name"
        className="py-3 px-3 pr-4 block w-full rounded-md border shadow-sm sm:text-sm outline-none focus:border focus:border-primaryColor"
      />
      {isIcon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center bg-bgGrayColor m-1 rounded-sm pointer-events-none">
          <HiSearch className="h-5 w-5 flex items-center justify-center ml-3 text-gray-400 " />
        </div>
      )}
    </div>
  );
};

export default Input;
