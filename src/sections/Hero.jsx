import React from "react";
import { Menu, X, Gamepad2, Heart, Ghost, Play, User, Sparkles, Scroll, Map, Award, Star, Download } from 'lucide-react';
import TabIlustration from "../components/layout/TabIlustration";
import CTAButtons from "../components/layout/CTAButtons";

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

                <div className="block md:hidden w-full mb-10 flex justify-center">
                    <TabIlustration />
                </div>

                {/* CTA Buttons */}
                <CTAButtons />

                {/* Footer Stat */}
                <div className="mt-12 flex items-center gap-3 text-sm text-gray-400 font-mono bg-[rgb(67,86,99)]/30 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
                    <span className="w-2 h-2 bg-[rgb(163,176,135)] rounded-full animate-pulse"></span>
                    SERVER ONLINE: INDONESIA #1
                </div>
            </div>

            {/* Right Column: Visual Illustration */}
            <div className="hidden md:flex w-full  mt-16 md:mt-0 relative justify-center items-center perspective-1000">
                <TabIlustration />
            </div>
        </header>

    )
}

export default Hero;