import React from "react";
import Button from "../Button/Button";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="bg-[#FDF8ED] text-[#101010] w-full py-24 flex justify-center items-center flex-col gap-8  px-5 sm:px-8 md:px-14 lg:px-24">
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-[#141A55]">
        A community for luxury travellers
      </h1>
      <p className="text-xl leading-8 md:leading-10 text-center md:max-w-[70%]">
        <em>SplitStay</em> is the trusted community for modern luxury
        travellers. Find inspiration, book unique journeys, and connect with
        like-minded members.
      </p>
      <Button>Create Free Account</Button>
      <div>
        Already have account?{" "}
        <Link
          href={"/login"}
          className="text-[#141A55] hover:underline font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
