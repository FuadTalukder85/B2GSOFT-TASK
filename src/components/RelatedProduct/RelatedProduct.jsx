import img01 from "../../assets/images/newArrival/newArrival01.png";
import img02 from "../../assets/images/newArrival/newArrival02.png";
import img03 from "../../assets/images/newArrival/newArrival03.png";
import img04 from "../../assets/images/newArrival/newArrival04.png";
import leftArrow from "../../assets/icons/leftArrow.png";
import rightArrow from "../../assets/icons/rightArrow.png";
import NewArrivalCard from "../utils/ReusableCard/ReusableCard";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import Image from "next/image";

const RelatedProduct = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">Related Products</p>
        <div className="flex gap-2">
          <Image src={leftArrow} alt="leftArrow"></Image>
          <Image src={rightArrow} alt="rightArrow"></Image>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-5">
        {/* card 01 */}
        <NewArrivalCard
          cardImg={img01}
          title="Indian Sharee"
          price="Bdt 2,300"
        ></NewArrivalCard>
        {/* card 02 */}
        <NewArrivalCard
          cardImg={img02}
          title="Hoodie"
          price="Bdt 2,300"
        ></NewArrivalCard>
        {/* card 03 */}
        <NewArrivalCard
          cardImg={img03}
          title="Plazu"
          price="Bdt 2,300"
        ></NewArrivalCard>
        {/* card 04 */}
        <NewArrivalCard
          cardImg={img04}
          title="Jacket"
          price="Bdt 2,300"
        ></NewArrivalCard>
      </div>
      <SeeMoreBtn></SeeMoreBtn>
    </div>
  );
};

export default RelatedProduct;
