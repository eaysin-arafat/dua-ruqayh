"use client";

import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      className={`relative inline-flex items-center w-6 h-2 rounded-full bg-gray-400 focus:outline-none transition-colors duration-300 ease-in-out ${
        isOn ? "bg-blue-500" : ""
      }`}
      onClick={handleClick}
    >
      <span
        className={`block w-3 h-3 rounded-full bg-gray-500 shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-[13px]" : ""
        }`}
      />
    </button>
  );
};

export default ToggleButton;
