import React from "react";

const Hero = () => {
  const contentCards = [
    {
      title: "Have an accommodation to share?",
      detail: "Already booked a place? Post your stay to find a roommate.",
    },
    {
      title: "Looking to join someone else's trip?",
      detail: "Browse open stays and message the traveler.",
    },
  ];
  return (
    <div className="w-full min-h-screen relative py-24">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/home/bg-video.mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 -z-10"></div>
      <div className="h-full w-full flex justify-center items-center z-10">
        <div className="max-w-[80%] flex flex-col gap-10 mt-10 items-center select-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:max-w-[80%]">
            Share your accommodation
            <br />
            <span className="text-4xl">✦</span> Save money{" "}
            <span className="text-4xl">✦</span>
            <br />
            Meet travelers
          </h1>
          <p className="text-center md:max-w-[70%] md:text-xl">
            You're early — and that's exactly the point. SplitStay is just
            opening up. The first few travelers shape what this becomes. Want to
            be one of them?
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-5 md:px-10">
            {contentCards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 rounded-2xl px-7 py-12 bg-white/20 backdrop-blur-lg border border-gray-200/20"
                >
                  <h1 className="text-2xl text-center font-semibold">
                    {card.title}
                  </h1>
                  <p className="text-center">{card.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
