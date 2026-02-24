"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Stats = () => {
    return (
        <section className="bg-[#010916] py-16 lg:py-24 px-6 sm:px-10 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1560px] mx-auto flex flex-col">

                {/* Section Header Bar */}
                <div className="flex items-center gap-2">
                    <div className="w-[6px] h-[6px] bg-[#2A48FF] rounded-full"></div>
                    <h2 className="text-[16px] font-inter">About us</h2>
                </div>
                <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-[64px] font-clash leading-[64px] font-semibold max-w-[656px]">
                        Meet the Minds Behind the Work
                    </p>

                    {/* Right: Social Icons */}
                    <div className="flex items-center gap-4">
                        {/* Twitter/X Icon */}
                        <div className="w-[52px] h-[52px] rounded-[127.87px] border border-white/20 flex items-center justify-center transition-all hover:bg-white/5 cursor-pointer">
                            <svg width="20.46" height="20.46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="white" />
                            </svg>
                        </div>
                        {/* Dribbble Icon */}
                        <div className="w-[52px] h-[52px] rounded-[127.87px] bg-[#2A48FF] flex items-center justify-center transition-all hover:brightness-110 cursor-pointer shadow-lg shadow-[#2A48FF]/20">
                            <img src="/images/Vector.png" alt="Dribbble" className="w-[20.46px] h-[20.46px] object-contain" />
                        </div>
                        {/* LinkedIn Icon */}
                        <div className="w-[52px] h-[52px] rounded-[127.87px] border border-white/20 flex items-center justify-center transition-all hover:bg-white/5 cursor-pointer">
                            <svg width="20.46" height="20.46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Feature Image */}
                    <div className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden w-full lg:w-[506px] lg:h-[600px] shrink-0">
                        <img
                            src="/images/Image.png"
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col">
                        <p className="font-inter font-semibold text-[32px] md:text-[32px] leading-[42px] tracking-[-3%] mb-12 w-[654px]">
                            <span className="text-white">At Aizeros, we bring together designers, strategists,</span>
                            <span className="text-white/40"> and makers to craft bold, thoughtful digital experiences made with care and curiosity.</span>
                        </p>

                        {/* Top Highlight Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="white" strokeWidth="1.5" />
                                        <path d="M2.5 12H21.5" stroke="white" strokeWidth="1.5" />
                                        <path d="M12 2.5C14.5013 4.82116 15.9287 8.24354 16 12C15.9287 15.7565 14.5013 19.1788 12 21.5C9.49872 19.1788 8.07125 15.7565 8 12C8.07125 8.24354 9.49872 4.82116 12 2.5V2.5Z" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-[16px] xl:text-[20px] font-clash">Over 100 Fields</span>
                                    <span className="text-white/40 text-[14px] xl:text-[16px] font-inter">12 Countries Over World</span>
                                </div>
                            </div>

                            {/* Avatar Stack */}
                            <div className="flex items-center -space-x-4">
                                <div className="w-12 h-12 rounded-full border-2 border-[#010916] overflow-hidden bg-gray-800">
                                    <img src="/images/Ellipse 21888.png" className="w-full h-full object-cover" alt="User" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-[#010916] overflow-hidden bg-gray-800">
                                    <img src="/images/Ellipse 21889.png" className="w-full h-full object-cover" alt="User" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-[#010916] overflow-hidden bg-gray-800">
                                    <img src="/images/Frame 2147225937.png" className="w-full h-full object-cover" alt="User" />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-[#010916] bg-[#2A48FF] flex items-center justify-center">
                                    <span className="text-white text-[12px] font-bold">+12</span>
                                </div>
                            </div>
                        </div>

                        {/* Partner Stats */}
                        <div className="py-12 sm:py-16">
                            <div className="flex flex-col gap-2">
                                <span className="text-[120px] sm:text-[140px] xl:text-[164px] font-bold text-white leading-none font-clash tracking-[-0.04em]">20+</span>
                                <span className="text-white/40 text-[18px] xl:text-[24px] font-inter tracking-tight">Trusted Partner</span>
                            </div>

                            {/* Logo Grid */}
                            <div className="grid grid-cols-3 gap-y-10 sm:gap-y-16 gap-x-8 mt-12 sm:mt-16 items-center">
                                <img src="/images/theo-black 1.png" alt="Theo" className="h-4 sm:h-5 xl:h-6 object-contain invert opacity-30 hover:opacity-100 transition-opacity" />
                                <img src="/images/file 1.png" alt="Leafe" className="h-4 sm:h-5 xl:h-6 object-contain invert opacity-30 hover:opacity-100 transition-opacity" />
                                <img src="/images/file(1) 1.png" alt="Hues" className="h-4 sm:h-5 xl:h-6 object-contain invert opacity-30 hover:opacity-100 transition-opacity" />
                                <img src="/images/Frame 2147225825.png" alt="Zumar" className="h-4 sm:h-5 xl:h-6 object-contain invert opacity-30 hover:opacity-100 transition-opacity" />
                                <img src="/images/Frame 2147225902.png" alt="Crona" className="h-4 sm:h-5 xl:h-6 object-contain invert opacity-30 hover:opacity-100 transition-opacity" />
                                <img src="/images/9.png" alt="Mercury" className="h-4 sm:h-5 xl:h-6 object-contain invert opacity-30 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        {/* Footer Row: CTA and Project Card */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-12 mt-4 relative">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-6 sm:px-16 sm:py-7 bg-gradient-to-r from-[#003BFF] to-[#00A3FF] rounded-full text-white text-[18px] font-bold text-center hover:shadow-[0_20px_40px_-10px_rgba(0,59,255,0.3)] transition-all hover:scale-[1.02]"
                            >
                                Book a call
                            </Link>

                            {/* Featured Project Floating Card (Desktop Only) */}
                            <div className="hidden sm:flex relative w-[320px] xl:w-[380px] h-[400px] xl:h-[450px] rounded-[32px] overflow-hidden shadow-2xl shrink-0 sm:absolute sm:-right-12 xl:-right-24 sm:-bottom-32 xl:-bottom-48 z-10 transition-transform hover:scale-[1.03]">
                                <img
                                    src="/images/Frame 31.png"
                                    className="absolute inset-0 w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
                                    alt="Featured Project"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-semibold text-[14px] xl:text-[16px] tracking-wide font-inter">Ezendo Fact</span>
                                        <span className="text-white/60 text-[12px] xl:text-[14px]">01/04</span>
                                    </div>
                                    <div>
                                        <div className="w-12 h-[1px] bg-white/40 mb-4"></div>
                                        <h3 className="text-white text-[56px] xl:text-[72px] font-bold leading-none font-clash">80+</h3>
                                        <p className="text-white/80 text-[14px] xl:text-[16px] mt-4 font-inter leading-relaxed max-w-[240px]">
                                            Projects successfully launched worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
