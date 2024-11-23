import Image from "next/image";
import img01 from "../../assets/images/newArrival/newArrival01.png";
import img02 from "../../assets/images/newArrival/newArrival02.png";
import img03 from "../../assets/images/newArrival/newArrival03.png";
import img04 from "../../assets/images/newArrival/newArrival04.png";
import leftArrow from "../../assets/icons/leftArrow.png";
import rightArrow from "../../assets/icons/rightArrow.png";
import Container from "../utils/Container";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import NewArrivalCard from "../utils/ReusableCard/NewArrivalCard";

const FeaturedProduct = () => {
  return (
    <Container>
      <div className="mt-7">
        <p className="uppercase text-purple-600">FEATURED PRODUCT</p>
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">New Arrivals</p>
          <div className="flex gap-2">
            <Image src={leftArrow} alt="leftArrow"></Image>
            <Image src={rightArrow} alt="rightArrow"></Image>
          </div>
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
    </Container>
  );
};

export default FeaturedProduct;
