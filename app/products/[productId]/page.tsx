import React from "react";
import ProductDetailsDisplay from "@/components/ProductDetailsDisplay";

export async function generateStaticParams() {
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  return products.map((product: any) => ({ productId: product.id }));
}

async function ProductDetails({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  const product = products.find((item: any) => item.id === productId);
  return (
    <div>
      <ProductDetailsDisplay product={product} />
    </div>
  );
}

export default ProductDetails;
