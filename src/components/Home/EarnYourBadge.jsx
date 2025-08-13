import React from "react";
import background from "../../../public/assets/home/bg2.png";
import Image from "next/image";

const EarnYourBadge = () => {
  const badgeCards = [
    {
      title: "Ambassador",
      detail: "Invited 3+ friends to SplitStay — help the community grow",
      total: 3,
      current: 2,
      progress: "Invited 2 of 3 friends",
    },
    {
      title: "Trip Host",
      detail:
        "Post a stay and match with at least 1 traveler to earn this badge",
      total: 1,
      current: 1,
      progress: "1 of 1 successful match",
    },
    {
      title: "Pioneer",
      detail: "One of the first 100 active users on the platform",
      total: 100,
      current: 47,
      progress: "User #47 of 100",
    },
  ];
  return (
    <div className="w-full min-h-screen overflow-hidden relative py-24 md:py-0">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={background}
          alt="background"
          className="object-cover h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 -z-10"></div>
      <div className="min-h-screen w-full flex justify-center items-center z-10">
        <div className="md:max-w-[90%] flex flex-col gap-10 mt-10 items-center select-none px-5 sm:px-8 md:px-14 lg:px-24 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            Earn your badge. Join the SplitStay movement.
          </h1>
          <p className="text-center md:max-w-[70%] md:text-xl">
            Celebrate your contribution and unlock early perks with SplitStay.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            {badgeCards.map((card, index) => {
              const progressClass =
                card.title === "Ambassador"
                  ? "progress-ambassador"
                  : card.title === "Trip Host"
                  ? "progress-trip"
                  : "progress-pioneer";
              return (
                <div
                  key={index}
                  className="flex-1 rounded-2xl px-7 py-12 bg-white/20 backdrop-blur-lg border border-gray-200/20 flex flex-col gap-3 hover:scale-[1.02] transition-all duration-300"
                >
                  <h1 className="text-2xl text-center font-semibold">
                    {card.title}
                  </h1>
                  <p className="text-center">{card.detail}</p>
                  <div className="">
                    <progress
                      max={card.total}
                      value={card.current}
                      id="progress"
                      className={`progress mt-5 ${progressClass}`}
                    >
                      progress
                    </progress>
                    <div className="w-full text-center text-gray-100">
                      {card.progress}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .progress {
          width: 100%;
          height: 10px;
          border-radius: 10px;
          background-color: var(--gray-2);
        }
        .progress::-webkit-progress-bar {
          background-color: #cccdcf;
          border-radius: 10px;
        }
        .progress-ambassador::-webkit-progress-value {
          background-color: #22c55e;
          border-radius: 10px;
        }
        .progress-trip::-webkit-progress-value {
          background-color: #3b82f6;
          border-radius: 10px;
        }
        .progress-pioneer::-webkit-progress-value {
          background-color: #a855f7;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default EarnYourBadge;
