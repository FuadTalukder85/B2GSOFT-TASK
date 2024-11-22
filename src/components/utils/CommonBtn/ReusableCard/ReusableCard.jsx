import Image from "next/image";
import AddToCartBtn from "../AddToCartBtn";
const NewArrivalCard = ({ cardImg, title, price }) => {
  return (
    <div>
      <div className="bg-white p-3">
        <div className="bg-[#F6F5FD]">
          <div className="relative flex items-center justify-center h-[260px]">
            <Image
              className="absolute px-3 bottom-0"
              src={cardImg}
              alt="cardImg"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <p>{title}</p>
          <p className="text-lg font-semibold uppercase">bdt {price}</p>
        </div>
        <AddToCartBtn></AddToCartBtn>
      </div>
    </div>
  );
};
export default NewArrivalCard;
