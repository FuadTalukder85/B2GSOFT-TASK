import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";

const ShopBtn = () => {
  return (
    <div className="group flex items-center">
      <button className="py-2 px-8 font-semibold rounded-full bg-[#7E53D4] text-white group-hover:bg-purple-700 transition-all duration-700">
        Shop Now
      </button>
      <button className="rounded-full bg-[#7E53D4] text-white p-2 group-hover:bg-purple-700 transition-all duration-700">
        <GoArrowUpRight className="group-hover:hidden text-2xl" />
        <GoArrowDownRight className="hidden group-hover:block text-2xl" />
      </button>
    </div>
  );
};

export default ShopBtn;
