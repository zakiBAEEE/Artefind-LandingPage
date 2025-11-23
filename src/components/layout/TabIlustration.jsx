import React from "react";
import { Menu, X, Gamepad2, Heart, Ghost, Play, User, Sparkles, Scroll, Map, Award, Star, Download } from 'lucide-react';

function TabIlustration() {
    return (
        <div className=" md:w-6/12 w-3/4 relative flex justify-center items-center perspective-1000">

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
                            <h3 className="text-2xl font-nusantara text-[rgb(255,248,212)] mb-1">Keris luk</h3>
                            <p className="text-xs text-[rgb(163,176,135)] font-mono font-bold">
                                Misi: Temukan Keris luk
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
    )
}

export default TabIlustration;