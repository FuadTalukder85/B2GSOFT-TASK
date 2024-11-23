"use client";
import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonSlider from "../utils/CommonSlider/CommonSlider";
import Container from "../utils/Container";
const RelatedProduct = () => {
  return (
    <Container>
      <div className="mt-24">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Related Products</p>
        </div>
      </div>
      {/* slider */}
      <div>
        <CommonSlider></CommonSlider>
      </div>
      <SeeMoreBtn></SeeMoreBtn>
    </Container>
  );
};

export default RelatedProduct;
