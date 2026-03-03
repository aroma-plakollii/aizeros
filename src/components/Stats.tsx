"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Stats = () => {
  return (
    <section className="bg-[#010916] py-16 lg:py-24 px-6 sm:px-10 lg:px-[60px] overflow-hidden">
      <div className="max-w-[1560px] mx-auto flex flex-col">
        {/* Section Header Bar */}
        <div className="flex items-center gap-2">
          <div className="w-[8px] h-[8px] bg-[#2A48FF] rounded-full"></div>
          <h2 className="text-[16px] font-inter">About us</h2>
        </div>
        <div className="flex items-start justify-between w-full mt-2">
          <p className="text-[64px] font-clash leading-[64px] font-semibold max-w-[656px]">
            Meet the Minds Behind the Work
          </p>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-[10px]">
            {/* Twitter/X Icon */}
            <div className="w-[52px] h-[52px] rounded-[127.87px] border border-white/20 flex items-center justify-center transition-all hover:bg-white/5 cursor-pointer">
              <svg
                width="20.46"
                height="20.46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Dribbble Icon */}
            <div className="w-[52px] h-[52px] rounded-[127.87px] bg-[#2A48FF] flex items-center justify-center transition-all hover:brightness-110 cursor-pointer shadow-lg shadow-[#2A48FF]/20">
              <img
                src="/images/Vector.png"
                alt="Dribbble"
                className="w-[20.46px] h-[20.46px] object-contain"
              />
            </div>
            {/* LinkedIn Icon */}
            <div className="w-[52px] h-[52px] rounded-[127.87px] border border-white/20 flex items-center justify-center transition-all hover:bg-white/5 cursor-pointer">
              <svg
                width="20.46"
                height="20.46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center mt-12">
          {/* Left: Feature Image */}
          <div className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden w-full lg:w-[606px] lg:h-[700px] shrink-0">
            <img
              src="/images/Image.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-[32px] md:text-[32px] leading-[42px] tracking-[-3%] mb-12 w-[654px]">
              <span className="text-white">
                At Aizeros, we bring together designers, strategists,
              </span>
              <span className="text-white/40">
                {" "}
                and makers to craft bold, thoughtful digital experiences made
                with care and curiosity.
              </span>
            </p>

            {/* Top Highlight Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Globe & Stats Text */}
              <div className="flex items-center gap-4">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/50 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M3.34 7h17.32" />
                  <path d="M3.34 17h17.32" />
                </svg>
                <div className="flex flex-col font-inter text-white/50 text-[16px] leading-[24px]">
                  <span>Over 100 Fields</span>
                  <span>12 Countries Over World</span>
                </div>
              </div>

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-4">
                <div className="w-[48px] h-[48px] opacity-100 rotate-0 rounded-full border-2 border-[#010916] overflow-hidden bg-gray-800">
                  <img
                    src="/images/Ellipse 21888.png"
                    className="w-full h-full object-cover"
                    alt="User"
                  />
                </div>
                <div className="w-[48px] h-[48px] opacity-100 rotate-0 rounded-full border-2 border-[#010916] overflow-hidden bg-gray-800">
                  <img
                    src="/images/Ellipse 21889.png"
                    className="w-full h-full object-cover"
                    alt="User"
                  />
                </div>
                <div className="w-[48px] h-[48px] opacity-100 rotate-0 rounded-full border-2 border-[#010916] overflow-hidden bg-gray-800">
                  <img
                    src="/images/Frame 2147225937.png"
                    className="w-full h-full object-cover"
                    alt="User"
                  />
                </div>
                <div className="w-[48px] h-[48px] opacity-100 rotate-0 rounded-full border-2 border-[#010916] bg-[#0404D7] flex items-center justify-center">
                  <span className="text-white text-[12px] font-bold">+12</span>
                </div>
              </div>
            </div>

            <div className="flex mt-9.5">
              <div className="mt-8 bg-white rounded-[24px] py-[32px] px-[28px] w-[327px] h-[370px] flex flex-col shrink-0">
                <h3 className="text-[48px] font-extrabold text-[#010916] leading-none tracking-tight font-inter mb-2">
                  20+
                </h3>
                <p className="text-[#6D6D6D] text-[14px] font-medium mb-10 font-inter">
                  Trusted Partner
                </p>

                <div className="grid grid-cols-3 gap-x-4 gap-y-10 items-center justify-items-center mb-10 w-full">
                  <img
                    src="/images/theo-black 1.png"
                    alt="theo"
                    className="w-[60px] object-contain opacity-60 mix-blend-multiply"
                  />
                  <img
                    src="/images/file 1.png"
                    alt="Crona"
                    className="w-[60px] object-contain opacity-60 mix-blend-multiply"
                  />
                  <img
                    src="/images/file(1) 1.png"
                    alt="Mercury"
                    className="w-[60px] object-contain opacity-60 mix-blend-multiply"
                  />
                  <img
                    src="/images/Frame 2147225825.png"
                    alt="hues"
                    className="w-[60px] object-contain opacity-60 mix-blend-multiply"
                  />
                  <img
                    src="/images/Frame 2147225902.png"
                    alt="ZUMAR CONS"
                    className="w-[60px] object-contain opacity-60 mix-blend-multiply"
                  />
                  <img
                    src="/images/9.png"
                    alt="Leafe"
                    className="w-[60px] object-contain opacity-60 mix-blend-multiply"
                  />
                </div>

                <button
                  className="w-[271px] h-[52px] flex items-center justify-center gap-[10px] transition-all hover:brightness-110 text-white font-semibold text-[18px] rounded-[80px] font-inter px-[32px] pt-[20px] pb-[20px]"
                  style={{
                    background:
                      "linear-gradient(90deg, #0013FF 0%, #11B7FC 100%)",
                  }}
                >
                  Book a call
                </button>
              </div>
              <div className="mt-8 relative bg-white rounded-[24px] w-[332px] h-[370px] px-[16.5px] py-[17.5px] flex flex-col shrink-0 overflow-hidden text-white group opacity-100 rotate-0">
                {/* Background Image Layer */}
                <img
                  src="/images/statsbg.png"
                  alt="Ezendo Fact"
                  className="w-[299px] h-[335px] transition-transform duration-500 group-hover:scale-110 rounded-[24px] opacity-100 rotate-0"
                />

                <div className="absolute flex flex-col justify-between z-10 w-[257px] h-[290px] top-[38px] right-[40px]" >
                  <div className="flex justify-between items-center text-[18px] font-archivo">
                    <div className="flex flex-col">
                      <p className="font-semibold">Ezendo Fact</p>
                      <div className="w-12 h-[2px] bg-white mt-1"></div>
                    </div>
                    <p className="opacity-80">01/04</p>
                  </div>
                  <div>
                    <p className="font-archivo text-[84px] font-semibold leading-none mb-2 tracking-tight">80+</p>
                    <p className="text-[16px] font-archivo opacity-90 leading-snug">
                      Projects successfully launched worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 h-[158px] rounded-[20px] bg-[#292932] flex items-center justify-between px-[53px] py-[30px] mt-4">
            {[
              { number: "40+", label: "Projects Delivered" },
              { number: "100+", label: "Happy Clients" },
              { number: "4+", label: "Years of Experience" },
              { number: "15", label: "Industries Served" },
            ].map((stat, index, array) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <p className="text-white text-[64px] font-archivo font-semibold leading-[46px] capitalize">{stat.number}</p>
                  <p className="text-white/60 text-[18px] font-archivo font-normal leading-[28px] mt-4">{stat.label}</p>
                </div>
                {index < array.length - 1 && (
                  <div className="w-[1px] h-[98px] bg-white opacity-[0.3]"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
