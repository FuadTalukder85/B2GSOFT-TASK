import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";

const ShopBtn = () => {
  return (
    <Link href="/product">
      <div className="group flex items-center">
        <button className="py-2 px-8 rounded-full bg-purple-500 text-white group-hover:bg-purple-700 transition-all duration-700">
          Shop Now
        </button>
        <button className="rounded-full bg-purple-500 text-white p-2 group-hover:bg-purple-700 transition-all duration-700">
          <GoArrowUpRight className="group-hover:hidden text-2xl" />
          <GoArrowDownRight className="hidden group-hover:block text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default ShopBtn;
