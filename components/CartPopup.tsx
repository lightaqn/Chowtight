import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addProduct, removeProduct } from "@/store/cartSlice";
import { setToggle } from "@/store/toggleSlice";
import CartCard from "./CartCard";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPopup: FC = () => {
  const { products: cartProducts, sum } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  return (
    <div className="absolute z-50 top-0 flex p-10 items-center justify-center min-h-[90vh] max-w-full backdrop-blur-lg bg-gray-500/45">
      <div className="flex flex-col py-4 items-center justify-center m-15 shadow-lg rounded-xl">
        <div className="w-full flex h-12 items-center justify-between">
          <div
            onClick={() => dispatch(setToggle(""))}
            className="h-full w-12 rounded-full p-2 text-center flex justify-end border border-gray-400"
          >
            X
          </div>
        </div>
        <h3 className="font-extrabold text-3xl text-center text-gray-800 my-4">
          Shopping Cart
        </h3>
        <div className="grid">
          <div className="col-span-full p-6">
            <h3> Your Order </h3>
            <div className="flex flex-col gap-y-4 overflow-y-auto scrollbar-hidden h-auto max-h-[70vh]">
              {cartProducts.map((product: any) => (
                <CartCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  size={product.size}
                  color={product.color}
                  price={product.price}
                  qty={product.quantity}
                  image={product.image}
                  handleInc={() => dispatch(addProduct(product))}
                  handleDec={() => dispatch(removeProduct(product.id))}
                  isWishlist={false}
                />
              ))}
            </div>
            <div className="grid-cols-3">
              <div className="col-span-2 gap-y-4">
                <h2 className="text-lg font-semibold">Shipping</h2>
                <h2 className="text-lg font-semibold">Coupon Discount</h2>
              </div>
              <div className="col-span-1 gap-y-4">
                <h2 className="text-lg font-semibold">$5.00</h2>
                <h2 className="text-lg font-semibold">$10.00</h2>
              </div>
            </div>
            <div className="flex py-5 px-10 bg-gray-500/40 backdrop-blur-lg rounded-2xl shadow-lg ring-2 gap-x-3 items-center justify-center ring-white w-full">
              <h1 className="text-2xl font-extrabold"> Total</h1>
              <h1 className="text-2xl font-extrabold">${sum} </h1>
            </div>
            <button
              onClick={() => {}}
              className="flex text-center whitespace-nowrap px-6 py-3 text-white border-2 border-blue-500 bg-blue-500 rounded-md w-full h-12 text-lg font-bold my-4"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
