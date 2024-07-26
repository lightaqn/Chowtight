import Image from "next/image";
import { useState } from "react";
import ProductMain from "@/components/ProductMain";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductMain products={data} />
    </main>
  );
}
