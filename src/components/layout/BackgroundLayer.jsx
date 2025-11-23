import React from "react";
import kawung from "../../assets/img/batik-kawung.png";


function BackroundLayer() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-auto">
            {/* Pattern Overlay (Batik Kawung) - Light Cream opacity */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url(${kawung})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "auto",   // atau "contain" kalau ingin ukuran mempertahankan proporsi
                }}
            ></div>


            {/* Gradient Orbs - Sage Green & Blue Grey glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[rgb(67,86,99)] rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[rgb(163,176,135)] rounded-full blur-[120px] opacity-30"></div>

            {/* Decorative: Siluet Gunungan (Wayang) - Cream faint */}
            <svg className="absolute -top-10 -right-20 md:right-0 w-[400px] h-[500px] text-[rgb(255,248,212)]/10 animate-pulse duration-[5000ms]" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M100,10 C110,40 160,120 160,200 C160,260 140,290 100,295 C60,290 40,260 40,200 C40,120 90,40 100,10 Z M100,30 C95,50 70,100 70,180 C70,230 85,250 100,255 C115,250 130,230 130,180 C130,100 105,50 100,30 Z" />
            </svg>
        </div>


    )
}

export default BackroundLayer;