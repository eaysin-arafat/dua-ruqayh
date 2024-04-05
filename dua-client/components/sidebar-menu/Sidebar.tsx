import React from "react";
import { sidebarMenu } from "./sidebar-menu";

const Sidebar = () => {
  return (
    <main className="flex justify-evenly items-center bg-bgWhiteColor rounded-xl fixed bottom-0 right-0 left-0  h-16 w-full rounded-b-md shadow-lg shadow-black">
      {sidebarMenu?.map((menu, index) => (
        <span key={index} className="text-textGrayColor p-1 rounded-full">
          {menu}
        </span>
      ))}
    </main>
  );
};

export default Sidebar;
