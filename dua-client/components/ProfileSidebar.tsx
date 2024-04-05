import React from "react";
import { BiDownload, BiSupport } from "react-icons/bi";
import { FcPrivacy } from "react-icons/fc";

const ProfileSidebar = () => {
  return (
    <div className="absolute top-[90px] py-5 px-3 bg-bgWhiteColor space-y-2 rounded-md">
      {[5, 5, 5, 5, 5].map((item) => (
        <p
          key={item}
          className="flex  items-center justify-start gap-2 whitespace-nowrap text-sm"
        >
          <BiDownload className="text-primaryColor" /> Download Dua App
        </p>
      ))}
      {/* <p>
          <BiSupport /> Support Us
        </p>
        <p>
          <BiDownload /> Download Dua App
        </p>
        <p>
          <FcPrivacy /> Privacy Policy
        </p>
        <p>
          <FcPrivacy /> Privacy Policy
        </p>
        <p>
          <FcPrivacy /> Privacy Policy
        </p>
        <p>
          <FcPrivacy /> Privacy Policy
        </p> */}
    </div>
  );
};

export default ProfileSidebar;
