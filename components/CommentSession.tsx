import { useState, useEffect, FC } from "react";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Facebook,
  StarOutlineTwoTone,
} from "@mui/icons-material";

interface Review {
  id: string;
  name: string;
  dateUpdated: string;
  comment: string;
  rating: number;
  image: string;
  user: string;
}
interface Reviews {
  comments: Review[];
}

const CommentSession: FC<Reviews> = ({ comments }: Reviews) => {
  const [commentIndex, setCommentIndex] = useState(0);

  const handleCommentSkip = (action: string) => {
    const nextIndex = (commentIndex + 1) % comments.length;
    const prevIndex = (commentIndex - 1) % comments.length;
    if (action === "next") {
      setCommentIndex(nextIndex);
    } else {
      setCommentIndex(prevIndex);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = commentIndex + (1 % comments.length);
      setCommentIndex(nextIndex);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const {
    id,
    name,
    dateUpdated,
    comment,
    rating,
    image: userImage,
    user,
  } = comments[commentIndex];
  return (
    <div className="rounded-2xl relative h-full w-full">
      <div className="h-1/2 flex flex-col p-8 items-center justify-center gap-y-6 w-full rounded-t-2xl">
        <h3 className="font-bold text-2xl text-gray-900">{name}</h3>
        <p className="font-normal text-lg text-gray-500">{dateUpdated}</p>
      </div>
      <div className="h-1/2 w-full rounded-b-2xl overflow-hidden object-contain relative flex flex-col">
        <Image
          src="/img123.jpg"
          alt="backgroundImg"
          className="h-full w-full"
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute w-1/2 z-10 h-3/4 top-3 items-start flex justify-center bg-gray-300/30 backdrop-blur-lg shadow-lg py-6 px-4 gap-y-4">
          <p className="text-white font-semibold leading-0 text-lg hover:text-green-500 text-center">
            {comment}
          </p>
          <div className="flex text-yellow-500 font-bold text-2xl space-x-2 my-3">
            {/* {Array.from(Math.ceil(rating)).map((_, i) => (
              <StarOutlineTwoTone/>
            ))} */}
          </div>

          <div className="flex space-x-2 items-center justify-center my-6">
            <div className="h-10 w-10 p-2 bg-white rounded-full">
              <Facebook />
            </div>
            <div className="h-10 w-10 p-2 bg-white rounded-full">
              <Instagram />
            </div>
            <div className="h-10 w-10 p-2 bg-white rounded-full">
              <Twitter />
            </div>
          </div>
        </div>
        <div className="h-1/4 p-8 flex items-center justify-center">
          <div className="flex gap-x-6 bg-transparent">
            <div
              onClick={() => handleCommentSkip("prev")}
              className="h-16 w-16 bg-gray-300/30 backdrop-blur-lg shadow-lg font-extrabold p-2 text-white text-2xl"
            >
              {" "}
              &lt
            </div>
            <div className="h-18 w-54 bg-gray-300/30 backdrop-blur-lg shadow-lg py-2 px-4 text-2xl text-white flex gap-x-4">
              <p className="font-extrabold">{id}</p>
              <p className="">{comments.length}</p>
            </div>
            <div
              onClick={() => handleCommentSkip("next")}
              className="h-16 w-16 bg-gray-300/30 backdrop-blur-lg text-white shadow-lg font-extrabold p-2 text-2xl"
            >
              {" "}
              &gt
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 z-20 text-center items-center rounded-fill h-40 w-40 justify-center ring-4 ring-gray-400 focus:gray-400 shadow-lg overflow-hidden object-contain">
        <Image
          src={userImage}
          alt="image"
          className="h-full w-full"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default CommentSession;
