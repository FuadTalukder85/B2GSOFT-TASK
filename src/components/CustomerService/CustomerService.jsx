import React from "react";
import Container from "../utils/Container";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import "./CustomerService.css";

const CustomerService = () => {
  return (
    <div className="tiny-banner">
      <div className="py-4 px-5 md:px-0 uppercase">
        <Container>
          <div className="md:flex justify-between gap-12 text-white">
            <div className="flex gap-3">
              <LiaShippingFastSolid className="text-3xl" />
              <div>
                <p className="md:text-xl">Free Shipping</p>
                <p className="text-sm mt-1">
                  Buy bdt 3000+ & get free delivery
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <BsArrowRepeat className="text-4xl" />
              <div>
                <p className="md:text-xl">7 days exchange</p>
                <p className="text-sm mt-1">
                  exchange within 7 days with similar type of products
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <FaHandHoldingUsd className="text-3xl" />
              <div>
                <p className="md:text-xl">100% payment secure</p>
                <p className="text-sm mt-1">
                  cash on delivery an secured payment
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CustomerService;
