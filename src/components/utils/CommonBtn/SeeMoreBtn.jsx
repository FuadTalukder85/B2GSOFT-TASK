import Link from "next/link";
import React from "react";

const SeeMoreBtn = () => {
  return (
    <Link href="/product">
      <div className="flex justify-center mt-7">
        <button className="py-2 px-6 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-700">
          See more
        </button>
      </div>
    </Link>
  );
};

export default SeeMoreBtn;
