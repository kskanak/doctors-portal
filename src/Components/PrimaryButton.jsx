import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="w-36 h-12  bg-gradient-to-r from-primary-sky to-secondary-accent rounded-lg text-white font-bold  dark:bg-violet-400 dark:text-gray-900">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
