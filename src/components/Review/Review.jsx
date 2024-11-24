"use client";
import Image from "next/image";
import proImg from "../../assets/images/proImg/profileImg.png";
import { BiLike } from "react-icons/bi";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
const Review = () => {
  const [rating, setRating] = useState(4);
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FFCF11",
    inactiveFillColor: "#DFDFDF",
  };

  return (
    <div className="mt-5 px-5 md:px-0">
      {/* Tabs */}
      <div className="flex gap-10 md:gap-16 text-sm font-semibold">
        <button className="text-gray-500">Details</button>
        <button className="text-purple-500">Rating & Review</button>
        <button className="text-gray-500">Discussion</button>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-6 gap-8">
        {/* Reviews Section */}
        <div className="order-2 md:order-1">
          <div className="mb-4">
            <select className="bg-transparent border border-purple-600 rounded-lg px-3 py-2 text-sm focus:outline-none">
              <option value="newest">Newest</option>
              <option value="old">Old</option>
            </select>
          </div>

          {/* Individual Review */}
          <div>
            <div className="flex gap-2 mt-8">
              <Image
                className="h-10 w-10 rounded-full"
                src={proImg}
                alt="proImg"
              ></Image>
              <div>
                <span className="font-semibold">
                  Cameron Williamson
                  <span className="text-gray-400 text-sm ps-1">3 days</span>
                </span>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={rating}
                  onChange={setRating}
                  itemStyles={myStyles}
                />
              </div>
            </div>
            <p className="font-semibold mt-3">Very nice!!</p>
            <p className="flex gap-1 items-center mt-3">
              <BiLike /> 10
            </p>
          </div>
          <div className="border border-dotted mt-5"></div>
          <div>
            <div className="flex gap-2 mt-5">
              <Image
                className="h-10 w-10 rounded-full"
                src={proImg}
                alt="proImg"
              ></Image>
              <div>
                <span className="font-semibold">
                  Cameron Williamson
                  <span className="text-gray-400 text-sm ps-1">3 days</span>
                </span>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={rating}
                  onChange={setRating}
                  itemStyles={myStyles}
                />
              </div>
            </div>
            <p className="font-semibold mt-3">Very nice!!</p>
            <p className="flex gap-1 items-center mt-3">
              <BiLike /> 10
            </p>
          </div>
        </div>
        {/* Ratings Section */}
        <div className="order-1 md:order-2">
          <p className="font-semibold">
            Product Review
            <span className="text-purple-600 ps-2">121 reviews</span>
          </p>
          <div className="flex items-center justify-between mt-2">
            <Rating
              style={{ maxWidth: 150 }}
              value={rating}
              onChange={setRating}
              itemStyles={myStyles}
            />
            <p>(4.0)</p>
          </div>
          <div className="border border-dotted mt-3"></div>

          {/* Rating Bars */}
          {[
            { stars: 5, count: 50 },
            { stars: 4, count: 5 },
            { stars: 3, count: 10 },
            { stars: 2, count: 30 },
            { stars: 1, count: 2 },
          ].map((item) => (
            <div key={item.stars} className="flex items-center mt-2">
              <p className="w-4">{item.stars}</p>
              <div className="w-96 bg-gray-200 rounded h-2">
                <div
                  className="bg-yellow-400 h-2 rounded"
                  style={{
                    width: `${item.count}%`,
                  }}
                ></div>
              </div>
              <p className="w-6 text-right text-sm">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
