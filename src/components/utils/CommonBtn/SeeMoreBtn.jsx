import React from "react";

const SeeMoreBtn = ({ children }) => {
  return (
    <div className="flex justify-center mt-7">
      <button className="py-2 px-6 text-white font-semibold rounded-lg bg-purple-600">
        {children}
      </button>
    </div>
  );
};

export default SeeMoreBtn;
