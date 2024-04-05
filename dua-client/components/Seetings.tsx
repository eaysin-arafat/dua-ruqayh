import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import ToggleButton from "./buttons/ToggleButton";

const seetingsData = [{ name: "Language Seetings", icon: <IoSettingsSharp /> }];

const Seetings = () => {
  return (
    <section className="bg-bgWhiteColor h-fit px-3 py-4 rounded-lg">
      <h2 className="text-center mb-6 text-lg font-semibold">Seetings</h2>

      <main className="flex flex-col gap-3">
        <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
          <IoSettingsSharp />
          <p className="whitespace-nowrap">Language Seetings</p>
        </div>
        <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
          <IoSettingsSharp />
          <p className="whitespace-nowrap">Language Seetings</p>
        </div>
        <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
          <IoSettingsSharp />
          <p className="whitespace-nowrap">Language Seetings</p>
        </div>
        <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
          <IoSettingsSharp />
          <p className="whitespace-nowrap">Language Seetings</p>
        </div>
        <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md relative">
          <span className="absolute w-1 h-full bg-primaryColor left-0 rounded-l-md"></span>
          <IoSettingsSharp className="text-primaryColor" />
          <p className="whitespace-nowrap text-primaryColor">
            Language Seetings
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 bg-bgWhiteColor text-textGrayColor px-4 py-2 rounded-md">
          <p className="whitespace-nowrap">Night Mode</p>
          <ToggleButton />
        </div>
      </main>
    </section>
  );
};

export default Seetings;

// import React from "react";
// import { IoSettingsSharp } from "react-icons/io5";
// import ToggleButton from "./buttons/ToggleButton";

// const seetingsData = [{ name: "Language Seetings", icon: <IoSettingsSharp /> }];

// const Seetings = () => {
//   return (
//     <section className="bg-bgWhiteColor h-fit w-full px-3 py-4 rounded-lg">
//       <h2 className="text-center mb-6 text-lg font-semibold">Seetings</h2>

//       <main className="flex flex-col gap-3 ">
//         <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
//           <IoSettingsSharp />
//           <p className="whitespace-nowrap">Language Seetings</p>
//         </div>
//         <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
//           <IoSettingsSharp />
//           <p className="whitespace-nowrap">Language Seetings</p>
//         </div>
//         <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
//           <IoSettingsSharp />
//           <p className="whitespace-nowrap">Language Seetings</p>
//         </div>
//         <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md">
//           <IoSettingsSharp />
//           <p className="whitespace-nowrap">Language Seetings</p>
//         </div>
//         <div className="flex items-center gap-4 bg-bgGrayColor text-textGrayColor px-4 py-2 rounded-md relative">
//           <span className="absolute w-1 h-full bg-primaryColor left-0 rounded-l-md"></span>
//           <IoSettingsSharp className="text-primaryColor" />
//           <p className="whitespace-nowrap text-primaryColor">
//             Language Seetings
//           </p>
//         </div>

//         <div className="flex items-center justify-between gap-4 bg-bgWhiteColor text-textGrayColor px-4 py-2 rounded-md">
//           <p className="whitespace-nowrap">Night Mode</p>
//           <ToggleButton />
//         </div>
//       </main>
//     </section>
//   );
// };

// export default Seetings;
