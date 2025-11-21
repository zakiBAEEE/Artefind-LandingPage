import React from "react";

function BackroundLayer() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-auto">
            {/* Pattern Overlay (Batik Kawung) - Light Cream opacity */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 C 45 10 60 30 30 60 C 0 30 15 10 30 0 Z M 30 60 C 15 50 0 30 30 0 C 60 30 45 50 30 60 Z' fill='none' stroke='%23fff8d4' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23fff8d4' /%3E%3C/svg%3E")`
                }}>
            </div>

            {/* Gradient Orbs - Sage Green & Blue Grey glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[rgb(67,86,99)] rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[rgb(163,176,135)] rounded-full blur-[120px] opacity-30"></div>

            {/* Decorative: Siluet Gunungan (Wayang) - Cream faint */}
            <svg className="absolute -top-10 -right-20 md:right-0 w-[400px] h-[500px] text-[rgb(255,248,212)]/10 animate-pulse duration-[5000ms]" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M100,10 C110,40 160,120 160,200 C160,260 140,290 100,295 C60,290 40,260 40,200 C40,120 90,40 100,10 Z M100,30 C95,50 70,100 70,180 C70,230 85,250 100,255 C115,250 130,230 130,180 C130,100 105,50 100,30 Z" />
            </svg>

            {/* Decorative: Candi Pattern Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10 bg-repeat-x" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 40 L10 20 L20 20 L20 10 L30 10 L30 20 L40 20 L40 40 Z M60 40 L60 25 L70 25 L70 15 L80 15 L80 25 L90 25 L90 40 Z' fill='%23fff8d4'/%3E%3C/svg%3E")`
            }}></div>
        </div>


    )
}

export default BackroundLayer;