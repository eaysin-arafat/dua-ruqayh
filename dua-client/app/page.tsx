"use client";

import Categories from "@/components/Categories";
import Dua from "@/components/Dua";
import Navbar from "@/components/Navbar";
import Seetings from "@/components/Seetings";
import Sidebar from "@/components/sidebar-menu/Sidebar";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesRef = useRef(null);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint
    if (mediaQuery.matches) {
      setShowCategories(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !(categoriesRef.current as Node).contains(event.target as Node)
      ) {
        setShowCategories(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="mb-3">
        <Navbar title="Dua Page" isHome={true} />
      </div>

      <div className="grid grid-cols-10 2xl:grid-cols-12 gap-5 relative">
        <div
          className="flex lg:hidden items-center gap-2 bg-bgWhiteColor px-5 py-5 rounded-md rounded-tr-none cursor-pointer col-span-full"
          onClick={toggleCategories}
        >
          <IoMdMenu size={24} />
          <p>The servant is dependent on his Lord</p>
        </div>

        <div
          ref={categoriesRef}
          className={` ${
            showCategories
              ? "col-span-full absolute top-0 left-0 h-full w-full md:w-[50%] transition-all duration-300"
              : "absolute left-[-700px] lg:static lg:block lg:col-span-4 xl:col-span-3 2xl:col-span-3"
          }`}
        >
          <Categories />
        </div>

        <div className="col-span-full lg:col-span-6 xl:col-span-7 2xl:col-span-7">
          <Dua />
        </div>

        <div className="hidden 2xl:block col-span-2 cursor-pointer ">
          <Seetings />
        </div>

        <div className="block xl:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
