"use client";
import AddToCartBtn from "@/components/utils/CommonBtn/AddToCartBtn";
import Container from "@/components/utils/Container";
import ProductCard from "@/components/utils/ReusableCard/ProductCard";
import { useProductContext } from "@/Provider/Provider";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  const { products } = useProductContext();
  return (
    <Container>
      <div className="md:grid grid-cols-4">
        {products.map((product) => (
          <div key={product._id}>
            <Link href={`/product/${product._id}`}>
              <ProductCard
                productImg={product.firstImg}
                totalReview="50"
                productTitle={product.title}
                productPrice={product.price}
              />
            </Link>
            <div className="px-4">
              <AddToCartBtn></AddToCartBtn>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductPage;
