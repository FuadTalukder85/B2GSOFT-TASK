import SeeMoreBtn from "../utils/CommonBtn/SeeMoreBtn";
import CommonSlider from "../utils/CommonSlider/CommonSlider";
const RelatedProduct = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">Related Products</p>
      </div>
      {/* slider */}
      <div>
        <CommonSlider></CommonSlider>
      </div>
      <SeeMoreBtn></SeeMoreBtn>
    </div>
  );
};

export default RelatedProduct;
