"use client";
import React from "react";
import Banner from "@/components/Banner";
import ProductDisplay from "@/components/ProductDisplay";
import Wishlist from "@/components/Wishlist";
import CartPopup from "@/components/CartPopup";
import ToggleBar from "@/components/ToggleBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type Props = {
  products: any;
};

const ProductMain = ({ products }: Props) => {
  const { toggle } = useSelector((state: RootState) => state.toggle);
  return (
    <div className="relative mx-auto max-w-7xl">
      <Banner />
      <ProductDisplay {...products} />
      {toggle === "menu" && <ToggleBar home={true} />}
      {toggle === "cart" && <CartPopup />} 
      {toggle === "wishlist" && <Wishlist />} 
    </div>
  );
};

export default ProductMain;
