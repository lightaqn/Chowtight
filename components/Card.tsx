import Image from "next/image";
import { TimelapseOutlined, BarChartOutlined } from "@mui/icons-material";

interface ICard {
  isProduct: boolean;
  id: number | string;
  caption: string;
  description: string;
  price: number;
  discountedPrice: number;
}

const Card = ({
  isProduct,
  id,
  caption,
  description,
  price,
  discountedPrice,
}: ICard) => {
  const newPost = true;
  return (
    <>
      {isProduct ? (
        <div className=" h-40 flex flex-col">
          <Image
            src=""
            alt=""
            className="h-3/4 w-full"
            height="100"
            width="100"
            objectFit="contain"
            layout="fill"
          />

          <div className="my-4 gap-y-3 p-3">
            <h4 className="text-2xl uppercase font-bold whitespace-nowrap">
              {caption}
            </h4>
            <p className="text-lg text-gray-600 whitespace-nowrap">
              {description}{" "}
            </p>
            <p className="flex items-center text-lg text-gray-600 whitespace-nowrap justify-center space-x-2">
              {price}
              <span className="text-green-500"> {discountedPrice}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="h-48 flex flex-col shadow-lg">
          <div className="relative w-full h-1/2">
            <Image
              src=""
              alt=""
              className="h-full w-full"
              height="100"
              width="100"
              objectFit="contain"
              layout="fill"
            />

            {newPost && (
              <div className="absolute z-10 inset-0 top-10 left-10 bg-red-500 text-white uppercase px-4 py-2 rounded-md text-lg font-extrabold">
                NEW
              </div>
            )}
          </div>

          <div>
            <div className="my-4 gap-y-3 p-2">
              <p className="flex items-center text-start space-x-4 text-sm">
                {/* {["Google", "Trending", "New"].map((index, item) =>
        <span key={index} className={`${tag === item && "text-blue-500" } `} > {item} </span>)  )}  */}
              </p>
            </div>

            <div className="my-4 gap-y-3 px-6 py-4">
              <h4 className="text-2xl uppercase font-normal whitespace-nowrap">
                {caption}
              </h4>
              <p className="text-lg text-gray-600 whitespace-nowrap leading-0">
                {description}{" "}
              </p>

              <div className="flex items-center justify-between text-lg text-gray-600 whitespace-nowrap space-x-2">
                {/* justify-center  */}
                <p className="text-blue-500">
                  <TimelapseOutlined />
                  {/* <span className="ml-2 text-gray-500" >{date} </span> */}
                </p>
                <p className="text-green-500">
                  <BarChartOutlined />
                  {/* <span className="ml-2 text-gray-500" >{comments.length} - comments</span>  */}
                </p>
              </div>
              <div className="text-2xl my-3  font-bold whitespace-nowrap">
                Learn More- "&gt"
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;

//Graphic Design//English Department//$16.48//$6.48
