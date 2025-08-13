import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoWhite from "../../../public/assets/home/logo-white.png";
import logoBlue from "../../../public/assets/home/logo-blue.png";
import Button from "../Button/Button";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navlinks = [
    {
      name: "Home",
      navigation: "/",
    },
    {
      name: "How it Works",
      navigation: "/how-it-works",
    },
  ];

  const handleMenuOpen = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-30 top-0 left-0 w-full`}>
      <div
        className={`flex justify-between items-center px-5 sm:px-8 md:px-14 lg:px-24 ${
          isScrolling
            ? "py-3 text-[#101010] bg-white/70 backdrop-blur-lg"
            : "py-5 bg-gradient-to-b from-black/30 to-transparent text-[#fff]"
        } transition-all duration-300 relative`}
      >
        <div>
          <Image
            src={isScrolling ? logoBlue : logoWhite}
            alt="splitStayLogo"
            height={50}
          />
        </div>
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CgMenuGridO size={30} />
        </div>
        <div
          className={`absolute top-16 w-full md:hidden ${
            isMenuOpen ? "right-0" : "-right-full"
          } transition-all duration-300 p-5 z-30`}
        >
          <div className="bg-gray-100 shadow-lg text-[#101010] rounded-lg py-6">
            <div className="flex w-full justify-end items-center py-2 px-5">
              <div
                onClick={() => handleMenuOpen()}
                className="text-[#101010]/80"
              >
                <IoClose size={25} />
              </div>
            </div>
            <ul className="flex flex-col items-center gap-1 pb-3 px-5">
              {navlinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.navigation}
                    className=" w-full text-center py-3"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" hidden md:flex gap-10 items-center">
          <ul className="flex items-center gap-7 ">
            {navlinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.navigation}
                  className={`relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:h-[2px] before:w-0  ${
                    isScrolling ? "before:bg-[#101010]" : "before:bg-[#fff]"
                  } before:transition-all before:duration-300 hover:before:w-full`}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
