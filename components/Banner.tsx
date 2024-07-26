import { FC } from "react";
import Image from "next/image";

type Props = {};

const Banner: FC = () => {
  return (
    <div className="flex h-[40vh] m-6">
      <div className="grid lg:grid-cols-5 gap-3 grid-rows-2">
        <div className="lg:col-span-2 row-span-2 relative">
          <Image
            src=""
            alt=""
            className="h-full w-full"
            height={100}
            width={100}
            objectFit="contain"
            layout="fill"
          />
           
          <BannerOverlay />
        </div>
        <div className="lg:col-span-3 gap-x-3 grid-rows-2">
          <div className="lg:col-span-full row-span-1">
            <Image
              src=""
              alt=""
              className="h-full w-full"
              height={100}
              width={100}
              objectFit="contain"
              layout="fill"
            />
             <BannerOverlay />
          </div>
          <div className="lg:col-span-3 lg:grid-cols-2 row-span-1 gap-3">
            <div className="col-span-1">
              <Image
                src=""
                alt=""
                className="h-full w-full"
                height={100}
                width={100}
                objectFit="contain"
                layout="fill"
              />
               <BannerOverlay />
            </div>
            <div className="col-span-1">
              <Image
                src=""
                alt=""
                className="h-full w-full"
                height={100}
                width={100}
                objectFit="contain"
                layout="fill"
              />
               <BannerOverlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const BannerOverlay = () => (
  <div className="absolute inset-0 top-5 w-full bg-transparent left-5 space-y-6 flex items-start ml-4 p-4">
    <p className="flex text-green-500">
      <span className="mr-2">5</span> items
    </p>
    <h1 className="font-bold text-black text-xl">FURNITURE</h1>
    <p>Read More</p>
  </div>
);
