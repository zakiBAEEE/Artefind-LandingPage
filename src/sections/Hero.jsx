import React from "react";
import { Menu, X, Gamepad2, Heart, Ghost, Play, User, Sparkles, Scroll, Map, Award, Star, Download } from 'lucide-react';

function Hero() {
    return (
        <header className="relative z-10 container mx-auto  min-h-screen flex flex-col md:flex-row items-center justify-center pt-12 mt-14">

            {/* Left Column: Typography & CTA */}
            <div className="w-full md:w-6/12 flex flex-col gap-y-4 md:items-start items-center text-left relative z-20 scroll-mt-44" id="home">

                {/* Badge: Cultural Heritage - Blue Grey Background */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(67,86,99)]/50 border border-[rgb(163,176,135)] shadow-sm mb-6 animate-fade-in-up">
                    <Award size={18} className="text-[rgb(163,176,135)]" />
                    <span className="text-sm font-bold tracking-widest uppercase text-[rgb(255,248,212)] font-sans">
                        Kompetisi BudayaGo 2025
                    </span>
                </div>

                {/* MAIN TITLE: ARTEFIND */}
                <div className="relative mb-2">
                    {/* Title: Cream text with Sage Green/Dark shadow */}
                    <h1 className="text-[5.5rem] md:text-[8.5rem] font-nusantara font-bold leading-[0.9] tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-[rgb(255,248,212)] to-[#d4cba0] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                        Artefind
                    </h1>
                    {/* Decorative accent on text */}
                    <Star className="absolute -top-4 -right-8 text-[rgb(163,176,135)] animate-spin-slow opacity-80" size={42} />
                    <div className="absolute -inset-10 bg-[rgb(163,176,135)]/10 blur-[60px] rounded-full z-[-1]"></div>
                </div>

                {/* Subtitle: WARISAN DIGITAL */}
                <div className="flex items-center gap-4 mb-8 ml-2">
                    <div className="h-[3px] w-16 bg-[rgb(163,176,135)]"></div>
                    <h2 className="text-2xl md:text-4xl font-nusantara text-[rgb(163,176,135)] tracking-wide">
                        Warisan <span className="text-gray-400 italic">Digital</span>
                    </h2>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-10 border-l-4 border-[rgb(163,176,135)] pl-6 font-light">
                    Jelajahi <strong className="text-[rgb(255,248,212)] font-semibold">Museum Nusantara</strong>. Kumpulkan artefak bersejarah yang hilang dalam dimensi digital dan jadilah penjaga budaya sejati.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 w-3/4 md:w-full sm:w-auto">
                    {/* Primary Button: Cream Background, Dark Text */}
                    <button className="group relative px-8 py-4 bg-[rgb(255,248,212)] text-[rgb(49,54,71)] rounded-xl font-bold shadow-[0_0_15px_rgba(255,248,212,0.3)] hover:shadow-[0_0_25px_rgba(255,248,212,0.5)] hover:translate-y-[2px] transition-all overflow-hidden flex justify-center items-center">
                        <span className="absolute top-0 left-0 w-full h-full bg-white/50 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></span>
                        <span className="relative flex items-center gap-3 font-nusantara text-xl">
                            <Download size={24} fill="currentColor" className="text-[rgb(49,54,71)]" /> Download Sekarang
                        </span>
                    </button>

                    {/* Secondary Button: Transparent with Sage Green Border */}
                    <button className="px-8 py-4 rounded-xl bg-transparent border border-[rgb(163,176,135)] text-[rgb(163,176,135)] font-bold hover:bg-[rgb(163,176,135)]/10 transition-all flex items-center justify-center gap-2 font-sans tracking-wide group">
                        <Scroll size={20} className="group-hover:rotate-12 transition-transform" /> Jelajahi
                    </button>
                </div>

                {/* Footer Stat */}
                <div className="mt-12 flex items-center gap-3 text-sm text-gray-400 font-mono bg-[rgb(67,86,99)]/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
                    <span className="w-2 h-2 bg-[rgb(163,176,135)] rounded-full animate-pulse"></span>
                    SERVER ONLINE: INDONESIA #1
                </div>
            </div>

            {/* Right Column: Visual Illustration */}
            <div className=" md:w-6/12 w-3/4 mt-16 md:mt-0 relative flex justify-center items-center perspective-1000">

                {/* Floating Elements Layer */}
                <div className="absolute inset-0 z-0">
                    {/* Icon Keris - Cream Color */}
                    <div className="absolute top-0 right-10 animate-float delay-0 opacity-100">
                        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="drop-shadow-lg">
                            <path d="M30 0C30 0 40 10 30 20C20 30 40 40 30 50C20 60 40 70 30 80L30 100H35L35 80C45 70 25 60 35 50C45 40 25 30 35 20C45 10 30 0 30 0Z" fill="rgb(255, 248, 212)" stroke="#435663" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Icon Topeng/Mask - Sage Green */}
                    <div className="absolute bottom-20 left-0 animate-float delay-1000 opacity-80 hover:grayscale-0 transition-all duration-500">
                        <Ghost size={50} className="text-[rgb(163,176,135)] drop-shadow-md" fill="rgba(49,54,71,0.5)" stroke="currentColor" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Main Card Container (3D Tilt Effect) */}
                <div className="relative z-10 w-full max-w-md bg-[rgb(67,86,99)]/40 backdrop-blur-md rounded-[2rem] p-3 border border-[rgb(163,176,135)]/30 shadow-2xl transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out md:ml-28">

                    {/* Inner Frame - Blue Grey Darker */}
                    <div className="bg-[rgb(30,35,48)] rounded-[1.8rem] overflow-hidden relative aspect-[4/5] group border border-[rgb(163,176,135)]/20 shadow-inner">

                        {/* Background Image Simulation */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23fff8d4'/%3E%3C/svg%3E")`
                            }}></div>
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgb(49,54,71)]"></div>
                        </div>

                        {/* Content Inside The Card */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-between p-8 text-center">

                            {/* Top UI */}
                            <div className="w-full flex justify-between items-center text-[10px] font-mono text-gray-400 uppercase tracking-widest bg-[rgb(49,54,71)] px-3 py-1 rounded-full border border-white/10">
                                <span>Lvl. 1</span>
                                <span className="text-[rgb(163,176,135)] font-bold">● Live</span>
                            </div>

                            {/* Center Character/Icon */}
                            <div className="relative group-hover:scale-110 transition-transform duration-500">
                                <div className="absolute inset-0 bg-[rgb(163,176,135)] blur-3xl opacity-20 rounded-full animate-pulse"></div>
                                <Map size={100} className="text-[rgb(255,248,212)] relative z-10 drop-shadow-lg" strokeWidth={1} />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/40 blur-lg rounded-[100%]"></div>
                            </div>

                            {/* Bottom Text */}
                            <div className="bg-[rgb(49,54,71)]/80 p-4 rounded-2xl backdrop-blur-sm w-full border border-white/5">
                                <h3 className="text-2xl font-nusantara text-[rgb(255,248,212)] mb-1">Candi Borobudur</h3>
                                <p className="text-xs text-[rgb(163,176,135)] font-mono font-bold">
                                    Misi: Temukan Stupa Emas
                                </p>
                            </div>

                            {/* Decorative Button inside card */}
                            <div className="w-16 h-16 rounded-full border-2 border-[rgb(163,176,135)]/30 flex items-center justify-center mt-2 group-hover:border-[rgb(255,248,212)] transition-colors cursor-pointer bg-[rgb(49,54,71)] shadow-lg">
                                <div className="w-12 h-12 bg-[rgb(163,176,135)] rounded-full flex items-center justify-center shadow-sm group-hover:scale-90 transition-transform border border-white/20">
                                    <Play size={20} fill="#313647" className="text-[rgb(49,54,71)]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Corner Ornaments (Ukiran Style) - Sage Green */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[rgb(163,176,135)] rounded-tl-2xl shadow-sm bg-[rgb(49,54,71)] rounded-br-2xl"></div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[rgb(163,176,135)] rounded-br-2xl shadow-sm bg-[rgb(49,54,71)] rounded-tl-2xl"></div>
                </div>

            </div>
        </header>

    )
}

export default Hero;