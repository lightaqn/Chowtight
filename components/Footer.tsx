import React, { useState } from "react";
import { footerDetails } from "@/utils/constants";
import {
  Instagram,
  Facebook,
  Twitter,
  YoutubeSearchedFor,
} from "@mui/icons-material";

type Props = {};

const Footer = (props: Props) => {
  const [email, setEmail] = useState("");
  return (
    <div className="h-[45vh] flex flex-col p-10">
      <div className="h-[10vh] flex flex-col bg-gray-300/30 backdrop-blur-lg shadow-lg items-center justify-between">
        <h1 className="font-extrabold text-2xl text-gray-900">Bandage</h1>
        <div className="flex space-x-2 justify-end">
          <Instagram />
          <YoutubeSearchedFor />
          <Facebook />
          <Twitter />
        </div>
      </div>
      <div className="h-[30vh] grid lg:grid-cols-6">
        <div className="grid lg:col-span-4">
          {footerDetails.map(({ id, heading, features }) => (
            <div key={id} className="">
              <h5 className="font-semibold text-xl text-gray-900">
                {heading}{" "}
              </h5>
              {features.map((item, index) => (
                <h6 key={index} className="font-normal text-lg text-gray-900">
                  {item} 
                </h6>
              ))}
               
            </div>
          ))}
        </div>
        <div className=" flex flex-col items-center justify-start lg:col-span-2">
          <h5 className="font-semibold text-xl text-gray-900 text-left">
            Get in touch
          </h5>
          <div className="h-12 w-18 lg:w-28 flex">
            <input
              placeholder="Your Email"
              className="px-6 py-3 w-⅔ h-full outline-none bg-gray-300/30 backdrop-blur-lg text-center flex text-2xl"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <button
              onClick={() => ({})}
              className="flex text-center whitespace-nowrap px-6 py-3 text-white border-2 border-blue-500 bg-blue-500 rounded-md w-1/3 h-full"
            >
              Subscribe
            </button>
          </div>
          <label>subscribe for our newsletter</label>
        </div>
      </div>
      <div className="h-[5vh] flex bg-gray-300/30 backdrop-blur-lg shadow-lg items-center justify-center lg:justify-start text-gray-600">
         Made With Love. By Finland. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
