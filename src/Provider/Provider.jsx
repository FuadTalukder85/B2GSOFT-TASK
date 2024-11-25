"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response not ok");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Data fetching error", error));
  }, []);
  const filterFeatured = products.filter(
    (product) => product.tag === "featured"
  );

  return (
    <ProductContext.Provider value={{ products, filterFeatured }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
