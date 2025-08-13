import React from "react";
import costSavingPic from "../../../public/assets/home/cost_reduction.jpg";
import flexiblePic from "../../../public/assets/home/flexibleOptions.jpg";
import verifiedTravelors from "../../../public/assets/home/verified-travelors.png";
import Image from "next/image";

const WhySplitStay = () => {
  const options = [
    {
      title: "Cost Savings",
      detail:
        "Save up to 50% on your accommodation costs by sharing with verified travelers",
      pic: costSavingPic,
    },
    {
      title: "Flexible Options",
      detail: "Split hotel rooms or full apartments at any destination",
      pic: flexiblePic,
    },
    {
      title: "Varified Matches",
      detail:
        "Connect with verified travelers for meaningful and safe experiences",
      pic: verifiedTravelors,
    },
  ];

  //   bg-[#FDF8ED]

  return (
    <div className="w-full px-5 sm:px-8 md:px-14 lg:px-24 bg-[#fff] py-20">
      <div className="mb-10">
        <h1 className="text-[#141A55] font-bold text-3xl md:text-4xl text-center">
          Why travelers love SplitStay
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className="bg-[#FDF8ED] text-[#101010] overflow-hidden rounded-3xl relative w-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.005] select-none"
            >
              <div
                className={`md:flex  ${
                  index === 1 && "md:flex-row-reverse"
                }  gap-5`}
              >
                <div className="w-full md:w-[50%] px-8 lg:px-16 flex flex-col justify-center py-8 md:py-16">
                  <div
                    className="p-[0.7px] w-10 h-10 rounded-full bg-linear-to-br from-[#FFFFFF] via-[#333333] to-[#FFFFFF] backdrop-blur-lg
          "
                  >
                    <button className="py-[6px] w-[39px] h-[39px] p-4 rounded-full bg-linear-to-br from-[#4a4a4a] to-[#121212] text-center text-[#fff]">
                      {index + 1}
                    </button>
                  </div>
                  <h3 className="mt-5 font-semibold text-2xl md:text-3xl max-w-[321px]">
                    {option.title}
                  </h3>
                  <p className=" mt-4 md:text-xl">{option.detail}</p>
                </div>
                <div className="w-full md:w-[50%] z-10">
                  <Image
                    src={option.pic}
                    alt="cardPic"
                    className="h-full w-full object-contain md:object-cover"
                  />
                </div>
              </div>
              <div
                className={`w-[117px] h-[237px] z-0 bg-gradient-to-r from-[#EB008B]/60 to-[#F9EC31]/80 blur-3xl rounded-full absolute top-10 md:top-[300px] ${
                  index !== 1
                    ? "-left-24 md:-left-16"
                    : "-right-24 md:-right-16"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhySplitStay;
