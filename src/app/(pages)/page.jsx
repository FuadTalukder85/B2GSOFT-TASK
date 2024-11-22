import Banner from "@/components/Banner/Banner";
import BigDeal from "@/components/BigDeal/BigDeal";
import CustomerService from "@/components/CustomerService/CustomerService";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerService></CustomerService>
      <BigDeal></BigDeal>
    </div>
  );
};

export default page;
