import { GoArrowUpRight } from "react-icons/go";

const CommonBtn = ({ children }) => {
  return (
    <div>
      <button className="py-2 px-8 rounded-full bg-[#7E53D4]">
        {children}
      </button>
      <button className="rounded-full bg-[#7E53D4] p-3">
        <GoArrowUpRight />
      </button>
    </div>
  );
};

export default CommonBtn;
