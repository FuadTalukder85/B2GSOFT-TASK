import { GoArrowUpRight } from "react-icons/go";

const ShopBtn = () => {
  return (
    <div>
      <button className="py-2 px-8 font-semibold rounded-full bg-[#7E53D4] text-white">
        Shop Now
      </button>
      <button className="rounded-full bg-[#7E53D4] p-3">
        <GoArrowUpRight />
      </button>
    </div>
  );
};

export default ShopBtn;
