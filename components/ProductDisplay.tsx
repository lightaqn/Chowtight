"use client";
import React, { useState, FC, useEffect, SetStateAction } from "react";
import { serviceItems } from "@/utils/constants";
import { Product } from "@/type";
import Card from "@/components/Card";

interface IProducts {
  products: Product[];
}

const ProductDisplay = ({ products }: IProducts) => {
  const [batchIndex, setBatchIndex] = useState(1);
  const [slicedProducts, setSlicedProducts] = useState<SetStateAction<any>>([]);
  let itemsPerLoad = 10;

  useEffect(() => {
    const initialIndex = (batchIndex - 1) * itemsPerLoad;
    const endIndex = initialIndex + itemsPerLoad;
    const batchProducts = products.slice(initialIndex, endIndex);
    if (batchProducts) {
      setSlicedProducts(batchProducts);
    }
  }, [batchIndex]);

  return (
    <div className="flex flex-col items-center justify-center p-8 gap-y-16">
      <div className="flex flex-col gap-y-6">
        <p className="text-xl text-gray-600 whitespace-nowrap">
          Featured Products
        </p>
        <h4 className="text-2xl uppercase font-bold whitespace-nowrap">
          {" "}
          BESTSELLER PRODUCTS
        </h4>
        <p className="text-lg text-gray-600 whitespace-nowrap">
          products trying to resolve the conflict between
        </p>
      </div>
      <div className="grid lg:grid-cols-5 gap-3 overflow-y-auto scrollbar-hide h-auto ">
        {slicedProducts.map(
          ({ id, title, description, price, discountPercentage }: Product) => (
            <Card
              key={id}
              id={id}
              caption={title}
              description={description}
              price={price}
              discountedPrice={price * discountPercentage}
              isProduct={true}
            />
          )
        )}
      </div>
      <button
        onClick={() => setBatchIndex((prev: number) => prev + 1)}
        className="flex text-center whitespace-nowrap px-6 py-3 text-blue-500 border-2 border-blue-500 bg-white rounded-md w-28 h-12"
      >
        LOAD MORE PRODUCTS
      </button>
      <div className="flex flex-col gap-y-6">
        <p className="text-xl text-gray-600 whitespace-nowrap">
          Featured Products
        </p>
        <h4 className="text-2xl uppercase font-bold whitespace-nowrap">
          {" "}
          HE BEST SERVICES
        </h4>
        <p className="text-lg text-gray-600 whitespace-nowrap">
          products trying to resolve the conflict between
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-y-4 lg:gap-x-10 my-6">
        {serviceItems.map(({ id, icon, caption, details }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center gap-y-6"
          >
            <p className="text-blue-500 text-5xl">{icon} </p>

            <h4 className="text-2xl font-bold whitespace-nowrap">{caption} </h4>
            <p className="text-lg text-gray-600 whitespace-nowrap">
              {details}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-y-6">
        <p className="text-xl text-blue-600 whitespace-nowrap">
          Practice Advice
        </p>
        <h4 className="text-2xl font-bold whitespace-nowrap">
          {" "}
          Featured Posts
        </h4>
      </div>
      {/* <div className="grid lg:grid-cols-3" >
    {products.map(({id, tag, caption, details, date, commentCount }: any) => (
  <Card key={id} caption={caption} description={description} price={price} discountedPrice={discountedPrice}product={false} /> ) )}
  </div> */}
    </div>
  );
};

export default ProductDisplay;
