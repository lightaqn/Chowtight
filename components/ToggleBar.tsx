import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "@/store/toggleSlice";
import {
  FavoriteOutlined,
  AddShoppingCartOutlined,
  Person2Outlined,
  SearchOutlined,
} from "@mui/icons-material";

type IToggle = {
  home: boolean;
};
const ToggleBar: FC<IToggle> = ({ home }) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute z-20 flex flex-col items-center justify-center text-center gap-y-4 p-4 top-0 left-0 right-0 h-auto">
      <div className="flex items-center justify-between">
        <div></div>
        <div
          className="justify-end text-gray-500 text-2xl rounded-full p-3 hover:border-2 hover:border-gray-500"
          onClick={() => dispatch(setToggle(""))}
        >
          X
        </div>
      </div>
      {home ? (
        <div>
          {["Home", "About", "Blog", "Contact", "Pages"].map((item, index) => (
            <h3 key={index}>{item} </h3>
          ))}
           
          <div className="flex flex-col justify-center items-center gap-y-4 text-blue-500">
            <div className="flex">
              <Person2Outlined />
              <button> Login/Register</button>
            </div>
            <SearchOutlined />
            <div className="relative">
              <AddShoppingCartOutlined />
              <span className="absolute inset-0 bg-white translate-y-1 p-2">
                1
              </span>
            </div>
            <div className="relative">
              <FavoriteOutlined />
              <span className="absolute inset-0 bg-white translate-y-1 p-2 top-10">
                2
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {["Home", "Product", "Pricing", "Contact"].map((item, index) => (
            <h3 key={index}>{item} </h3>
          ))}
           
        </div>
      )}
       
    </div>
  );
};

export default ToggleBar;
