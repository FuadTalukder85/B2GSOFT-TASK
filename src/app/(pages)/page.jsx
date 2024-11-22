import Banner from "@/components/Banner/Banner";
import BigDeal from "@/components/BigDeal/BigDeal";
import CustomerService from "@/components/CustomerService/CustomerService";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import NewCustomerOffer from "@/components/NewCustomerOffer/NewCustomerOffer";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <CustomerService></CustomerService>
      <FeaturedProduct></FeaturedProduct>
      <NewCustomerOffer></NewCustomerOffer>
      <BigDeal></BigDeal>
    </div>
  );
};

export default page;
