import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addProduct, removeProduct } from "@/store/cartSlice";
import { removeFromWishlist } from "@/store/wishlistSlice";
import Image from "next/image";
import React, { FC } from "react";

interface CartPopupState {
  isWishlist: boolean;
  name: string;
  size: string;
  color: string;
  price: number;
  qty: number;
  image: string;
  handleInc: () => void;
  handleDec: () => void;
}
const CartCard: FC<CartPopupState> = ({
  isWishlist,
  id,
  name,
  size,
  color,
  price,
  image,
  qty,
  handleInc,
  handleDec,
}) => {
  const dispatch = useDispatch();
  const itemToCart = { id, name, size, color, price, qty, image };
  return (
    <div className="grid grid-cols-3 gap-x-3 p-6 hover:shadow-lg hover:transition hover:transform hover:duration-300 hover:ease-in-out ">
      <div className="col-span-2 gap-y-2">
        <h4 className="text-xl font-bold">{name}</h4>
        <div className="flex flex-col gap-x-2 text-lg">
          <p className="font-normal text-gray-500">
            Size <span className="font-bold">{size} </span>
          </p>
          <p className="font-normal text-gray-500">
            Color <span className="font-bold bg-${color}-700">{color}</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-bold">{price}</h3>
          <h3 className="flex font-normal gap-x-2 text-lg">
            <span
              onClick={handleDec}
              className="flex h-10 w-10 rounded-2xl p-3 border-2 border-black text-center active: text-red-500 active:border-red-500 active:font-bold"
            >
              -
            </span>
            <span className="flex h-10 w-20 rounded-2xl p-3 border-2 border-black text-center   active:font-bold">
              {qty}
            </span>
            <span
              onClick={handleInc}
              className="flex h-10 w-10 rounded-2xl p-3 border-2 border-black text-center active: text-green-500 active:border-green-500 active:font-bold"
            >
              +
            </span>
          </h3>
          <h3 className="text-lg font-bold">
            {" "}
            Subtotal: <span className="ml-3">{price * qty} </span>
          </h3>
        </div>
        {isWishlist && (
          <div className="flex items-center justify-between gap-x-2 my-2">
            <button
              onClick={() => dispatch(addProduct(itemToCart))}
              className="flex text-center whitespace-nowrap px-6 py-3 text-white border-2 border-blue-500 bg-blue-500 rounded-md w-full h-12 text-lg font-bold my-4"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeFromWishlist(id))}
              className="flex text-center whitespace-nowrap px-6 py-3 text-white border-2 border-blue-500 bg-red-500 rounded-md w-full h-12 text-lg font-bold my-4"
            >
              Remove From Wishlist
            </button>
          </div>
        )}
         
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <Image
          src={image}
          height={50}
          width={40}
          className=""
          layout="responsive"
          objectFit="contain"
          alt={name}
        />
      </div>
    </div>
  );
};

export default CartCard;
