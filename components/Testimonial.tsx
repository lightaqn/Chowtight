import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import { testimonialItems } from "@/utils/constants";

type Props = {};

const Testimonial = (props: Props) => {
  const [testimonial, setTestimonial] = useState<SetStateAction<any>>("");
  return (
    <div className="min-h-screen flex flex-col p-10">
      <div className="h-½ bg-white grid lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-2xl my-3  font-bold whitespace-nowrap mb-6">
            What they say about us
          </h2>
          <TestimonialCard testimony={testimonialItems[testimonial]} />
        </div>

        <div className="lg:col-span-1 grid-cols-3 grid-rows-3 gap-2 lg:gap-6">
          {testimonialItems.length &&
            testimonialItems.map(({ id, img }: any) => (
              <>
                <div key={id} onClick={() => setTestimonial(id)}>
                  {/* <Image   src={img} alt="" className="h-full w-full" height="" width="" objectFit="contain" layout="fill" /> */}
                </div>
              </>
            ))}
        </div>
      </div>

      <div className="h-½ bg-gray-300 flex items-center justify-center relative">
        {/* <Image  src={img} alt="" className="h-full w-full" objectFit="cover" layout="fill" /> */}
        <div className="absolute z-10 top-0 left-0 h-full w-full flex flex-col items-center justify-center gap-x-4 bg-transparent">
          <h3 className="text-xl my-3  font-bold text-blue-600 whitespace-nowrap">
            Designing Better Experience
          </h3>
          <h1 className="text-3xl my-3  font-bold text-blue-600 whitespace-nowrap">
            Problems trying to resolve the conflict between
          </h1>
          <p className="text-lg text-gray-600 whitespace-nowrap leading-0 mb-3">
            Problems trying to resolve the conflict between the two major realms
            of classical physics
          </p>
          <p className="text-xl font-bold text-green-600 whitespace-nowrap leading-0 mb-3">
            {" "}
            $16.58
          </p>
          <button
            onClick={() => ({})}
            className="flex text-center whitespace-nowrap px-6 py-3 text-white border-2 border-blue-500 bg-blue-500 rounded-md w-24 lg:w-28 h-12"
          >
            ADD A CALL TO ACTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const TestimonialCard = ({ testimony }: any) => {
  return (
    <div className="flex flex-col my-4 p-4">
      <Image
        src={testimony.img}
        alt={testimony.caption}
        className="h-full w-full rounded-full items-center justify-center "
        height={100}
        width={100}
        objectFit="contain"
        layout="fill"
      />

      <div className="flex items-center justify-center text-yellow-500">
        {/* {Array.fill(testimony.rating).map((_,i)=> (< StarIcon />))} */}
      </div>

      <p className="text-lg text-gray-600 whitespace-nowrap leading-0 mb-3">
        {testimony.comment}
      </p>
      <p className="text-2xl my-3  font-bold text-blue-600 whitespace-nowrap">
        {testimony.name}
      </p>
      <p className="text-2xl my-3  font-bold whitespace-nowrap">
        {testimony.role}
      </p>
    </div>
  );
};
