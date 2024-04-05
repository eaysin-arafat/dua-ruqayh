import { HiMiniHandRaised } from "react-icons/hi2";

const DuaIcon = () => {
  return (
    <div className="flex items-center justify-center bg-primaryColor px-1 py-2 rounded-lg">
      <HiMiniHandRaised
        size={20}
        className="translate-x-[2px] text-bgWhiteColor"
      />
      <HiMiniHandRaised
        size={20}
        className="translate-x-[-2px] text-bgWhiteColor"
      />
    </div>
  );
};

export default DuaIcon;
