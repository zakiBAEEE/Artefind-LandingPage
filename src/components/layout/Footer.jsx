import React from "react";
import { Heart } from "lucide-react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bg-[rgb(30,35,48)] ">

            {/* 1. Background Pattern (Motif Banji Halus - Konsisten dengan section lain) */}


            {/* 2. Main Content */}
            <div className="container mx-auto px-6 py-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

                    {/* Left: Copyright & Event Name */}
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <span className="font-nusantara text-xl text-[rgb(255,248,212)] tracking-wide">
                           Tim Sri<span className="text-[rgb(163,176,135)]">Kode</span> 2025
                        </span>
                        <span className="hidden md:inline text-[rgb(163,176,135)]/30">|</span>
                        <p className="text-gray-400 text-sm font-mono">
                            &copy; {currentYear} All Rights Reserved.
                        </p>
                    </div>

                    {/* Right: Team & University Credential */}
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 text-sm">

                        {/* Team Credit */}
                        <div className="flex items-center gap-2 text-gray-300 group cursor-default">
                            <span className="font-nusantara text-lg text-[rgb(163,176,135)] group-hover:text-[rgb(255,248,212)] transition-colors border-b border-transparent group-hover:border-[rgb(163,176,135)]">
                                BudayaGo 2025
                            </span>
                        </div>

                        {/* University Tag */}
                        <div className="flex items-center gap-2 bg-[rgb(255,248,212)]/5 px-3 py-1 rounded-full border border-[rgb(255,248,212)]/10">
                            <div className="w-2 h-2 rounded-full bg-[rgb(163,176,135)]"></div>
                            <span className="text-gray-300 font-semibold tracking-wide uppercase text-xs">
                                Universitas MDP
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;