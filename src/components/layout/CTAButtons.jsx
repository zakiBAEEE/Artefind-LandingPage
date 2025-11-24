import React from "react";
import { Menu, X, Gamepad2, Heart, Ghost, Play, User, Sparkles, Scroll, Map, Award, Star, Download } from 'lucide-react';

function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-5 w-3/4 md:w-full sm:w-auto">
            {/* Primary Button: Cream Background, Dark Text */}
            <a className="group relative px-8 py-4 bg-[rgb(255,248,212)] text-[rgb(49,54,71)] rounded-xl font-bold shadow-[0_0_15px_rgba(255,248,212,0.3)] hover:shadow-[0_0_25px_rgba(255,248,212,0.5)] hover:translate-y-[2px] transition-all overflow-hidden flex justify-center items-center" href="https://drive.google.com/drive/folders/1J2VjUsMYbZU7LMouw94MhgqnE3OMQveS?usp=sharing">
                <span className="absolute top-0 left-0 w-full h-full bg-white/50 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></span>
                <span className="relative flex items-center gap-3 font-nusantara text-xl">
                    <Download size={24} fill="currentColor" className="text-[rgb(49,54,71)]" /> Download Sekarang
                </span>
            </a>

            {/* Secondary Button: Transparent with Sage Green Border */}
            <a
                className="cursor-pointer px-8 py-4 rounded-xl bg-transparent border border-[rgb(163,176,135)] text-[rgb(163,176,135)] font-bold hover:bg-[rgb(163,176,135)]/10 transition-all flex items-center justify-center gap-2 font-sans tracking-wide group"
                href="#about"
                onClick={(e) => {
                    e.preventDefault(); // Mencegah URL jadi #about

                    const element = document.getElementById("about");

                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }}
            >
                <Scroll size={20} className="group-hover:rotate-12 transition-transform" />
                Jelajahi
            </a>

        </div >
    );
}

export default CTAButtons;