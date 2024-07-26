"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addProduct, removeProduct } from "@/store/cartSlice";
import { setToggle } from "@/store/toggleSlice";
import { FC } from "react";
import {
  MenuOpenOutlined,
  FavoriteOutlined,
  AddShoppingCartOutlined,
  PhoneOutlined,
  MessageOutlined,
  Person2Outlined,
  SearchOutlined,
  Instagram,
  Facebook,
  Twitter,
  YoutubeSearchedFor,
} from "@mui/icons-material";

interface IHeader {}
const Header: FC<IHeader> = () => {
  const dispatch = useDispatch();
  const { sum, products: cartProducts } = useSelector(
    (state: RootState) => state.cart
  );

  const { products: wishlistProducts } = useSelector(
    (state: RootState) => state.wishlist
  );
  return (
    <div className="flex flex-col w-full mx-4 h-[10vh]">
      <div className="flex bg-green-500 h-½ text-white font-semibold items-center justify-evenly">
        <div className=" hidden lg:inline-flex flex-grow flex space-x-4">
          <p className="">
            <span className="">
              <PhoneOutlined />
            </span>
            <span className="">(255) 555-0118</span>
          </p>
          <p>
            <span className="">
              <MessageOutlined />
            </span>
            <span className="">michelle.rivera@example.com</span>
          </p>
        </div>

        <h3 className="">Follow us and get a chance to win 80% off</h3>
        <div className="flex justify-end">
          <h3 className="">Follow us </h3>
          <div className="flex space-x-2">
            <Instagram />
            <YoutubeSearchedFor />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
      //white section
      <div className="flex lg:h-½ bg-white">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-2xl text-gray-900">Bandage</h1>

          <div className="hidden lg:flex space-x-2">
            <button>Home</button>
            <select>
              <option>Shop</option>
            </select>
             <button>About</button>
            <button>Blog</button>
            <button>Contact</button>
            <button>Pages</button>
          </div>
        </div>

        <div className="flex justify-end space-x-3 text-blue-500">
          <div className="hidden lg:block">
            <Person2Outlined /> <button> Login/Register </button>
          </div>
          <SearchOutlined />
          <div onClick={() => dispatch(setToggle("cart"))} className="relative">
            <AddShoppingCartOutlined />
            <span className="absolute inset-0 bg-white translate-y-1 p-2">
              {cartProducts.length}{" "}
            </span>
          </div>
          <div
            onClick={() => dispatch(setToggle("wishlist"))}
            className="hidden lg:block relative"
          >
            <FavoriteOutlined />
            <span className="absolute inset-0 bg-white translate-y-1 p-2">
              {wishlistProducts.length}{" "}
            </span>
          </div>

          <div
            className="block lg:hidden"
            onClick={() => dispatch(setToggle("menu"))}
          >
            <MenuOpenOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
