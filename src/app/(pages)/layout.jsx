import { Provider } from "@/Provider/Provider";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <Provider>
      <div className="bg-[#F4F8FF]">
        <Header />
        {children}
        <Footer />
      </div>
    </Provider>
  );
};

export default layout;
