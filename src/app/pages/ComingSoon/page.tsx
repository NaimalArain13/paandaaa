"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const launchDate = new Date("September 15, 2024 00:00:00").getTime();
      const now = new Date().getTime();
      const gap = launchDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      setTimeLeft({
        days: Math.floor(gap / day),
        hours: Math.floor((gap % day) / hour),
        minutes: Math.floor((gap % hour) / minute),
        seconds: Math.floor((gap % minute) / second),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="reletive items-center justify-center min-h-screen ">
       <div className="text-center text-white pt-20 space-y-12 absolute inset-0">
        
        <h1 className="text-5xl font-bold flex justify-center mb-4">
          PAN
          {/* <Image
            src={"/bg2.jpg"}
            alt=""
            width={35}
            height={25}
            className="bg-yellow-500"
          /> */}
          <b className="text-yellow-500">DA</b>
        </h1>
        <div className="flex justify-center">
          <h1 className="text-white text-lg pr-2">something new</h1>{ " | " } 
          <h1 className="text-yellow-500 text-2xl font-semibold pl-2">is COMING</h1>
        </div>

        <div className="countdown flex text-yellow-500 justify-center space-x-6 text-3xl mb-8">
          <div>
            <span className="text-white font-bold text-5xl">
              {timeLeft.days}
            </span>{" "}
            Days
          </div>
          <div>
            <span className="text-white font-bold text-5xl">
              {timeLeft.hours}
            </span>{" "}
            Hours
          </div>
          <div>
            <span className="text-white font-bold text-5xl">
              {timeLeft.minutes}
            </span>{" "}
            Minutes
          </div>
          <div>
            <span className="text-white font-bold text-5xl">
              {timeLeft.seconds}
            </span>{" "}
            Seconds
          </div>
        </div>
        <div className=" space-x-3">
          <button className="bg-yellow-500 p-2 px-8 text-rounded-sm border border-white">Who We Are</button>
          <button className="rounded-sm p-2 px-8 bg-transparent text-white border border-white">What We Do</button>
        </div>
      </div>
    </div>
  );
}
