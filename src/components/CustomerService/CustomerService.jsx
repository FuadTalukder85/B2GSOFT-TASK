import React from "react";
import Container from "../utils/Container";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsArrowRepeat } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import "./CustomerService.css";

const CustomerService = () => {
  return (
    <div className="tiny-banner">
      <div className="py-4 uppercase">
        <Container>
          <div className="flex justify-between gap-12 text-white">
            <div className="flex gap-3">
              <LiaShippingFastSolid className="text-3xl" />
              <div>
                <p className="text-xl">Free Shipping</p>
                <p className="">Buy bdt 3000+ & get free delivery</p>
              </div>
            </div>
            <div className="flex gap-3">
              <BsArrowRepeat className="text-3xl" />
              <div>
                <p className="text-xl">7 days exchange</p>
                <p className="">
                  exchange within 7 days with similar type of products
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <FaHandHoldingUsd className="text-3xl" />
              <div>
                <p className="text-xl">100% payment secure</p>
                <p className="">cash on delivery an secured payment</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CustomerService;
