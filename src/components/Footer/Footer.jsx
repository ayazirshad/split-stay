import React from "react";
import logoWhite from "../../../public/assets/home/logo-white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const pages = [
    { title: "How it works", link: "/" },
    { title: "Why SpliStay", link: "/" },
    { title: "Reviews", link: "/" },
    { title: "FAQ", link: "/" },
    { title: "Terms & conditions", link: "/" },
    { title: "Privacy Policy", link: "/" },
    { title: "Become a Partner", link: "/" },
    { title: "Twitter", link: "https://twitter.com" },
    { title: "Facebook", link: "https://facebook.com" },
    { title: "Instagram", link: "https://instagram.com" },
  ];
  return (
    <div className="px-5 sm:px-8 md:px-14 lg:px-24 py-24 bg-[#090c27]">
      <div className=" mb-28 sm:flex sm:gap-5 justify-between">
        <div className="w-32 md:w-[161px]">
          <Image src={logoWhite} alt="splitStay" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 lg:gap-x-28 gap-y-5 mt-10 sm:mt-0">
          {pages.map((item, index) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="w-max relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:h-[1px] before:w-0 before:bg-[#fff] before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      {/* license */}
      <div className="flex justify-between text-[#8A8A89] text-[13.5px] flex-wrap gap-4">
        <p>&copy;2025 SplitStay. All rights reserved</p>
        <p>
          101 Marlow Street. #12-05 Clife Parkview. Singapore 059020.
          <a href="/"> View on Maps</a>
        </p>
        <p> Cookies Policy | Map</p>
      </div>
    </div>
  );
};

export default Footer;
