import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "@/store/toggleSlice";
import { RootState } from "@/store";
import { addToWishlist, removeFromWishlist } from "@/store/wishlistSlice";
import { FC } from "react";
import CartCard from "./CartCard";

const Wishlist: FC = () => {
  const dispatch = useDispatch();
  const { products: wishlistProducts } = useSelector(
    (state: RootState) => state.wishlist
  );
  return (
    <div className="absolute top-0 z-50 flex flex-col py-4 items-center justify-center">
      <div className="mb-10 flex h-12 w-full items-center justify-between">
        <div
          onClick={() => dispatch(setToggle(""))}
          className="flex justify-end h-full w-12 rounded-full border border-gray-500 p-2 text-center"
        >
          X
        </div>
      </div>
      <h3 className="font-extrabold text-3xl text-center text-gray-800 my-4">
        My Wishlist
      </h3>
      <div className="grid">
        <div className="col-span-full p-6">
          <h3> Your Choices </h3>
          <div className="flex flex-col gap-y-4 ">
            {wishlistProducts.map(({ id, name, size, color, price, image }) => (
              <CartCard
                key={id}
                id={id}
                name={name}
                size={size}
                color={color}
                price={price}
                image={image}
                isWishlist={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
