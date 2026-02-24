"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [swiper, setSwiper] = useState<any>(null);

    return (
        <section className="relative w-full min-h-[946px] flex flex-col items-center overflow-hidden bg-black font-sans pt-[100px] lg:pt-[150px]">
            {/* Background Graphic */}
            <div
                className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-[946px] -top-[10px] bg-[url('/images/fabricaa_1.png')] bg-cover bg-center opacity-80"
            >
                {/* Optional subtle overlay to ensure text readability if needed */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1560px] px-10 lg:px-[60px] flex flex-col">
                {/* Top: Headline Group */}
                <div className="flex flex-col items-start mb-4">
                    <h1 className="text-[60px] xs:text-[90px] md:text-[180px] lg:text-[210px] xl:text-[278px] font-semibold text-white leading-[84.41px] md:leading-[150.21px] lg:leading-[175.25px] xl:leading-[232px] tracking-[-0.03em] mix-blend-difference font-clash">
                        Aizeros<span className="text-[69.13px] md:text-[102px] lg:text-[122px] xl:text-[190px] align-top mt-10 font-clash">®</span>
                    </h1>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="w-[31px] h-[2px] bg-white"></div>
                        <span className="text-white uppercase tracking-[0.3em] font-semibold text-[18px] font-clash">Digital Agency</span>
                    </div>
                </div>

                {/* Bottom: Flex Justify Between for Description and Cards */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-8 lg:mt-[180px]">
                    {/* Left: Description & Buttons */}
                    <div className="flex flex-col items-start">
                        <div className="flex gap-4 items-start mb-8">
                            <p className="text-white text-[14px] sm:text-[20px] font-medium leading-[24px] md:leading-[28px] tracking-[-0.01em] font-inter w-full xs:w-[400px] sm:w-[450px] lg:w-[408px] h-[99px] whitespace-break-spaces">
                                /                We help startups and businesses
                                grow faster through AI-driven UI/UX
                                design, branding, development, and digital
                                marketing — all under one roof.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center mt-1 sm:mt-4 lg:mt-20 w-full xs:w-auto">
                            <Link
                                href="/portfolio"
                                className="flex items-center justify-between gap-5 px-[20px] py-[16px] border border-white/20 rounded-full text-white hover:bg-white/5 transition-all group w-full xs:w-auto"
                            >
                                <span className="font-medium text-[14px] md:text-[16px]">View Our Works</span>
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
                            </Link>

                            <Link
                                href="/contact"
                                className="flex items-center justify-between gap-5 pl-[20px] pr-[6px] py-[6px] bg-white rounded-full text-black hover:bg-white/90 transition-all group lg:h-[56px] w-full xs:w-auto"
                            >
                                <span className="font-semibold text-[14px] md:text-[16px] font-inter">Connect Us</span>
                                <div className="w-[45px] h-[45px] rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Cards & Pagination */}
                    <div className="flex flex-col items-center lg:items-end max-w-[540px] xl:max-w-[654px] w-full mt-16 lg:mt-0">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={12}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 12
                                }
                            }}
                            grabCursor={true}
                            onSwiper={setSwiper}
                            onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
                            className="w-full cursor-pointer"
                        >
                            {/* Project Card 1 */}
                            <SwiperSlide>
                                <div
                                    onClick={() => {
                                        swiper?.slideTo(0);
                                        setSelectedIndex(0);
                                    }}
                                    className={`w-full max-w-[321px] h-[201.77px] bg-[#438356]/80 rounded-[12.23px] overflow-hidden relative backdrop-blur-[44px] transition-all duration-300 mx-auto lg:mx-0 ${selectedIndex === 0 ? 'ring-1 ring-white/20' : ''}`}
                                    style={{ boxShadow: '0px 26px 15px 0px #00000026' }}
                                >
                                    <div className="absolute top-[15px] left-[23px] w-[275px] sm:w-[220px] xl:w-[275px] h-[193px]">
                                        <img
                                            src="/images/Frame 31.png"
                                            alt="Project Preview"
                                            className="w-full h-full object-cover rounded-t-[6px]"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Project Card 2 */}
                            <SwiperSlide>
                                <div
                                    onClick={() => {
                                        swiper?.slideTo(1);
                                        setSelectedIndex(1);
                                    }}
                                    className={`w-full max-w-[321px] h-[201.77px] bg-gradient-to-br from-[#2E6B8D]/80 via-[#1E3A5F]/80 to-[#121A2B]/80 rounded-[12.23px] overflow-hidden relative backdrop-blur-[44px] transition-all duration-300 mx-auto lg:mx-0 ${selectedIndex === 1 ? 'ring-1 ring-white/20' : ''}`}
                                    style={{ boxShadow: '0px 26px 15px 0px #00000026' }}
                                >
                                    <div className="absolute top-[83.9px] left-[58px] sm:left-[26px] xl:left-[58px] w-[206px] h-[32.3px]">
                                        <Logo />
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Project Card 3 */}
                            <SwiperSlide>
                                <div
                                    onClick={() => setSelectedIndex(2)}
                                    className={`w-full max-w-[321px] h-[201.77px] bg-gradient-to-br from-[#1E3A5F]/80 via-[#121A2B]/80 to-black/80 rounded-[12.23px] overflow-hidden relative backdrop-blur-[44px] transition-all duration-300 mx-auto lg:mx-0 ${selectedIndex === 2 ? 'ring-1 ring-white/20' : ''}`}
                                    style={{ boxShadow: '0px 26px 15px 0px #00000026' }}
                                >
                                    <div className="absolute top-[83.9px] left-[26px] xl:left-[58px] w-[206px] h-[32.3px]">
                                        <Logo />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* Pagination */}
                        <div className="flex items-center gap-3 w-full px-2 mt-12">
                            <span className="text-white text-[14px] font-medium font-inter">0{selectedIndex + 1}</span>
                            <div className="flex-1 h-[1px] bg-white/10 relative">
                                <div
                                    className="absolute left-0 top-0 h-full bg-white transition-all duration-500 ease-out"
                                    style={{ width: `${((selectedIndex + 1) / 3) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-[#FFFFFF4D] text-[14px] font-medium font-inter">03</span>
                        </div>

                        {/* Mobile Scroll Down Indicator */}
                        <div className="flex md:hidden flex-col items-center gap-2 mt-3 xs:mt-14">
                            <span className="text-[#FFFFFF99] font-normal text-[14px] leading-[18px] tracking-normal font-inter">
                                Scroll down
                            </span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#FFFFFF99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute right-10 lg:right-[60px] top-[150px] lg:top-[280px] hidden md:flex flex-col items-center gap-[15px] z-10">
                <span className="text-[#FFFFFF99] font-normal text-[14px] leading-[18px] tracking-normal font-inter [writing-mode:vertical-lr] rotate-180">
                    Scroll down
                </span>
                <div className="w-[0.5px] h-[98.94px] bg-[#FFFFFF99]"></div>
            </div>
        </section>
    );
};

export default Hero;
