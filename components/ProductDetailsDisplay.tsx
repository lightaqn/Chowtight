import { useState, useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addProduct, removeProduct } from "@/store/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/store/wishlistSlice";
import Image from "next/image";
import AdditionalInfo from "./AdditionalInformation";
import Description from "./Description";
import CommentSession from "./CommentSession";
import ToggleBar from "./ToggleBar";
import {
  StarTwoTone,
  FavoriteOutlined,
  AddShoppingCartOutlined,
  RemoveRedEye,
} from "@mui/icons-material";

const ProductDetailsDisplay: FC = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [tab, setTab] = useState(0);
  const [color, setColor] = useState("");

  const [size, setSize] = useState("");

  const handleImgScroll = (action: string) => {
    const nextIndex = imgIndex + (1 % images.length);
    const prevIndex = imgIndex - (1 % images.length);
    if (action === "next") {
      setImgIndex(nextIndex);
    } else {
      setImgIndex(prevIndex);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = imgIndex + (1 % images.length);
      setImgIndex(nextIndex);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const tabs = ["Description ", " Additional Information", "Reviews"];
  const {
    id,
    name,
    role,
    price,
    rating,
    reviews,
    description,
    stock,
    images,
    colors,
    sizes,
  } = product;

  const { products: cartProducts, sum } = useSelector(
    (state: RootState) => state.cart
  );

  const tabsComponent = [
    <Description description={description} />,
    <AdditionalInfo />,
    <CommentSession comments={reviews} />,
  ];
  const { toggle } = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch();
  const payload = { id, name, price, color, size, image: images[0] };

  return (
    <div className="relative">
      <div className="">
        <div className="h-[40vh] grid lg:grid-cols-2">
          <div className="lg:col-span-1 h-full">
            <div className="relative h-[30vh]">
              <Image
                src={images[imgIndex]}
                alt=""
                className="h-full w-full items-center justify-center "
                height=""
                width=""
                objectFit="cover"
                layout="fill"
              />
              <div className="absolute z-10 top-0 bottom-0 w-full left-0 inset-0 px-8 items-center hidden hover:block justify-between">
                {imgIndex > 0 && (
                  <button
                    onClick={() => handleImgScroll("prev")}
                    className=" bg-transparent text-2xl text-white"
                  >
                    &lt
                  </button>
                )}
                 
                {imgIndex < images.length && (
                  <button
                    onClick={() => handleImgScroll("next")}
                    className=" bg-transparent text-2xl text-white"
                  >
                    &gt
                  </button>
                )}
              </div>
            </div>
            //images slide
            <div className="flex overflow-x-auto gap-x-2h-[10vh] justify-start items-center">
              {images &&
                images.map(({ img }: any, index: number) => (
                  <Image
                    key={index}
                    src={img}
                    alt=""
                    className="h-full w-full rounded-lg items-center justify-center "
                    height=""
                    width=""
                    objectFit="contain"
                    layout="responsive"
                  />
                ))}
               
            </div>
          </div>

          <div className="h-[30vh] lg:col-span-1 flex flex-col px-4 items-center justify-start">
            <div className="h-1/2">
              <h3 className="text-lg text-gray-600 whitespace-nowrap leading-0 mb-3">
                {name}
              </h3>
              <div className="flex text-yellow-500">
                {Array.from(rating).map((_, i) => (
                  <StarTwoTone />
                ))}
              </div>
              <h2 className="text-2xl my-3  font-bold whitespace-nowrap">
                {price}
              </h2>
              <p className="text-lg my-3 font-bold whitespace-nowrap text-gray-500">
                Availability
                <span
                  className={`${
                    stock > 5 ? "text-green-500" : "text-red-500"
                  } `}
                ></span>
                {stock > 1 ? "In Stock" : "Not In Stock"}
              </p>
            </div>

            <div className="border-t-2 border-gray-500 h-1/2">
              <div className="flex flex-col gap-y-4 space-x-4 py-4">
                {colors &&
                  colors.map((c: string) => (
                    <input
                      onClick={() => setColor(c)}
                      type="button"
                      value={c}
                      className={`bg-${c}-700 rounded-full h-10 w-10 border-none p-2.5`}
                    />
                  ))}
                {sizes &&
                  sizes.map((s: string) => (
                    <input
                      onClick={() => setSize(s)}
                      type="button"
                      value={s}
                      className="bg-gray-700 rounded-full h-10 w-10 p-2.5 border-none"
                    />
                  ))}
              </div>

              <div className="flex items-center justify-between">
                <select className="flex text-center whitespace-nowrap px-6 py-3 text-white border-2 border-blue-500 bg-blue-500 rounded-md w-1/3 h-full gap-y-2">
                  <option className="flex text-xl font-semibold text-center px-4 py-2 ">
                    Select Options
                  </option>
                  <option
                    className="flex text-xl font-semibold text-center px-4 py-2 "
                    onClick={() => dispatch(addProduct(payload))}
                  >
                    Add to Cart
                  </option>
                  <option
                    className="flex text-xl font-semibold text-center px-4 py-2 "
                    onClick={() => dispatch(addToWishlist(payload))}
                  >
                    Add to Wishlist
                  </option>
                </select>
                <div className="flex justify-around space-x-3 text-gray-500">
                  <FavoriteOutlined />
                  <AddShoppingCartOutlined />
                  <RemoveRedEye />
                </div>
              </div>
              <div className="h-[10vh] w-full"></div>
            </div>
          </div>
        </div>
        //tab
        <div className="flex items-center justify-center text-gray-500 font-normal">
          {tabs.map((index: any, item) => (
            <button
              onClick={() => setTab(index)}
              key={index}
              className={`${
                tab === index && "font-bold border-b-4"
              } h-full lg:w-28 w-18 text-2xl`}
            >
              {item}{" "}
            </button>
          ))}
           
        </div>
        <div className="w-full h-[50vh]">{tabsComponent[tab]} </div>
        //bestseller product
        <div>
          {/* <div className="grid lg:grid-cols-4 gap-3" >
  {bestproductItems.map(({id, caption, description, price, discountedPrice}: ) => (
  <Card key={id} caption={caption} description={description} price={price} discountedPrice={discountedPrice} product={true} /> ) )}
  </div> */}
        </div>
        //company logo
        <div>
          {/* <div className="flex flex-col lg:flex-row overflow-hidden gap-x-3h-24 justify-start items-center object-contain py-4 px-6 lg:py-6 lg:px-12" >
  {companyLogos && companyLogos.map((img, index)=> (
  <Image key={index} src={img} alt="" className="h-16 w-24 rounded-lg items-center justify-center " height="" width="" objectFit="contain" layout="responsive" />))}
   </div> */}
        </div>
      </div>
      {toggle === "menu" && <ToggleBar home={false} />}
    </div>
  );
};

export default ProductDetailsDisplay;
