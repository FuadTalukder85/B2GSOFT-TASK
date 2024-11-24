"use client";
import Container from "@/components/utils/Container";
import ProductCard from "@/components/utils/ReusableCard/ProductCard";
import { useProductContext } from "@/Provider/Provider";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  const { products } = useProductContext();
  return (
    <Container>
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <Link href={`/product/${product._id}`} key={product._id}>
            <ProductCard
              productImg={product.firstImg}
              totalReview="50"
              productTitle={product.title}
              productPrice={product.price}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductPage;
