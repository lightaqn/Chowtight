import { FC } from "react";
import { descriptionString } from "@/utils";

const Description = ({ description }: { description: string }) => {
  const descriptionArray: any = descriptionString(description, 250);

  return (
    <div className="grid lg:grid-cols-3">
      <div className="flex flex-col lg:col-span-2 space-y-4 py-4">
        <h2 className="font-extrabold text-2xl text-gray-900">
          {descriptionArray[0]}{" "}
        </h2>
        <p className="font-normal text-lg">{descriptionArray[1]}</p>

        <p className="first-letter:text-4xl first-letter:text-blue-500 font-normal text-lg">
          {descriptionArray[2]}
        </p>
        <p className="font-normal text-lg">{descriptionArray[3]}</p>
      </div>
      <div className="lg:col-span-1 bg-gray500"></div>
    </div>
  );
};
export default Description;
