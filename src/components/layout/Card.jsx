import React from "react";

function Card({ pictureLink, title, description }) {
    const colors = {
        slate: 'rgb(67, 86, 99)',     // Background Kartu Belakang
        sage: 'rgb(163, 176, 135)',   // Aksen/Highlight
        cream: 'rgb(255, 248, 212)',  // Teks Utama
        cardDark: '#2a2e3d'           // Warna dasar kartu utama
    };
    return (
        <div
            className=" w-60 h-80 rounded-xl shadow-2xl overflow-hidden group"
            style={{
                borderColor: colors.sage,
                backgroundColor: colors.cardDark
            }}
        >
            {/* Ilustrasi Gambar di dalam Kartu */}
            <div className="h-48 w-full bg-cover bg-center relative overflow-hidden">
                {/* Ganti src ini dengan gambar aset gamemu */}
                <img
                    src={pictureLink}
                    alt="Artefak Kuno"
                    className="w-full h-full object-fill opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2a2e3d]"></div>
            </div>

            {/* Konten Teks Kartu */}
            <div className="p-5 text-center">
                <h4 className="font-serif text-xl font-bold mb-1" style={{ color: colors.cream }}>
                    {title}
                </h4>
                <p className="text-xs leading-relaxed opacity-80" style={{ color: colors.cream }}>
                    {description}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.sage }}></div>
                </div>
            </div>
        </div>
    )
}

export default Card;