import React from "react";
import { sidebarMenu } from "./sidebar-menu";
import { TbHandStop } from "react-icons/tb";
import { IoHandLeftOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMiniHandRaised } from "react-icons/hi2";
import Image from "next/image";
import duaIcon from "../../app/favicon.png";

const MenuSidebar = () => {
  return (
    <header className="flex flex-row justify-between h-fit">
      <main className="flex flex-col justify-center items-center space-y-16 bg-bgWhiteColor rounded-3xl px-5 py-6">
        <div className="flex items-center justify-center bg-primaryColor px-1 py-1 rounded-lg">
          <Image src={duaIcon} alt="Dua icon" height={40} width={40} />
        </div>
        <div className="flex flex-col gap-5">
          {sidebarMenu?.map((menu, index) => (
            <span
              key={index}
              className="bg-bgGrayColor text-textGrayColor p-1 rounded-full"
            >
              {menu}
            </span>
          ))}
        </div>

        <div className=" bg-primaryColor rounded-xl px-3 py-2.5">
          <FaHandHoldingHeart size={20} className="text-bgWhiteColor" />
        </div>
      </main>
    </header>
  );
};

export default MenuSidebar;
