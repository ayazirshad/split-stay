import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 uppercase rounded-full bg-[#141A55] hover:bg-[#181f64] text-[#fff] transition-all duration-300 cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
