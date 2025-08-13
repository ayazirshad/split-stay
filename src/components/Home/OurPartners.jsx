import React from "react";
import svgImg0 from "../../../public/assets/home/svg-image-0.png";
import svgImg1 from "../../../public/assets/home/svg-image-1.png";
import svgImg2 from "../../../public/assets/home/svg-image-2.png";
import svgImg3 from "../../../public/assets/home/svg-image-3.png";
import svgImg4 from "../../../public/assets/home/svg-image-4.png";
import svgImg5 from "../../../public/assets/home/svg-image-5.png";
import svgImg6 from "../../../public/assets/home/svg-image-6.png";
import Image from "next/image";

const OurPartners = () => {
  const logos = [svgImg2, svgImg1, svgImg0, svgImg3, svgImg4, svgImg5, svgImg6];
  return (
    <div className="bg-[#fff] w-full py-20 text-[#101010]">
      <div className="bg-[#FDF8ED] py-7">
        <p className="text-center text-xl">As seen in</p>
        <div className="overflow-hidden mt-5">
          <div className="animate-slide gap-28 h-16">
            {logos.concat(logos).map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={logo}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
      @keyframes slide {
        0% {
          transform: translateX(0);
        }
          50%{
          transform: translateX(-50%);
          }
        100% {
          transform: translateX(-100%);
        }
      }
      .animate-slide {
        display: flex;
        animation: slide 15s linear infinite;
      }
    `}
      </style>
    </div>
  );
};

export default OurPartners;
