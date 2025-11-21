import React from 'react';
// Pastikan Anda mengimpor ikon jika diperlukan nanti
// import { Play, ArrowRight } from 'lucide-react';

const CardStack = () => {
    // Definisi warna (Sama seperti sebelumnya)
    const colors = {
        slate: 'rgb(67, 86, 99)',
        sage: 'rgb(163, 176, 135)',
        cream: 'rgb(255, 248, 212)',
        cardDark: '#2a2e3d',
        cardBack: '#1a1c24' // Warna tambahan untuk kartu belakang yang lebih gelap
    };

    // Kita akan membuat array dummy untuk kartu-kartu di belakang
    // Jumlah 6 cukup untuk membuat efek "antrean"
    const backgroundCards = [...Array(6)];

    return (
        <section className="relative w-full py-20 overflow-visible z-10 bg-[#313647]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* --- BAGIAN KIRI: VISUAL KARTU 3D STACK --- */}
                    {/*
                        PENTING: 'perspective-[2000px]' pada container induk sangat penting.
                        Semakin kecil angkanya, semakin ekstrim efek 3D-nya. 2000px memberikan kesan yang pas.
                    */}
                    <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center perspective-[2000px]">

                        {/* CONTAINER UNTUK SEMUA KARTU AGAR BISA DI GESER BERSAMAAN */}
                        {/* Kita geser sedikit ke kiri (md:-left-20) agar komposisinya pas di tengah */}
                        <div className="relative w-64 h-96 transform-style-3d md:-left-20">

                            {/* --- LOOP KARTU BELAKANG (The Trail) --- */}
                            {backgroundCards.map((_, index) => {
                                // Perhitungan matematis untuk posisi 3D
                                // Semakin besar index (semakin di belakang), semakin jauh jaraknya.
                                const i = index + 1; // Mulai dari 1 agar tidak menumpuk dengan kartu utama
                                const zOffset = -60 * i; // Mundur ke belakang (sumbu Z)
                                const xOffset = -40 * i; // Geser ke kiri (sumbu X)
                                const opacity = 1 - (i * 0.12); // Semakin jauh semakin transparan

                                return (
                                    <div
                                        key={index}
                                        className="absolute inset-0 rounded-2xl shadow-2xl border border-white/5 transition-all duration-500"
                                        style={{
                                            backgroundColor: colors.cardBack,
                                            // INI KUNCINYA: Transformasi 3D
                                            // rotateY(20deg): Memutar kartu agar sisi kiri menjauh
                                            // translateX & Z: Mengatur posisi di ruang 3D
                                            transform: `rotateY(20deg) translateX(${xOffset}px) translateZ(${zOffset}px)`,
                                            opacity: opacity,
                                            zIndex: 10 - i // Pastikan urutan tumpukan benar
                                        }}
                                    >
                                        {/* Placeholder isi kartu belakang (hanya warna gelap) */}
                                        <div className="w-full h-1/2 bg-black/30 rounded-t-2xl"></div>
                                    </div>
                                );
                            })}


                            {/* --- KARTU UTAMA (Depan & Fokus) --- */}
                            <div
                                className="absolute inset-0 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-2 z-20 overflow-hidden group"
                                style={{
                                    borderColor: colors.sage,
                                    backgroundColor: colors.cardDark,
                                    // Kartu utama juga di rotasi Y sedikit agar seragam, tapi posisinya paling depan (Z=0)
                                    transform: 'rotateY(20deg) translateZ(0px)',
                                }}
                            >
                                {/* Ilustrasi Gambar */}
                                <div className="h-56 w-full bg-cover bg-center relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1601987077614-79c003543f33?q=80&w=1975&auto=format&fit=crop"
                                        alt="Game Character"
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay agar teks terbaca dan menyatu dengan kartu */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2e3d] via-transparent to-transparent"></div>
                                    {/* Aksen lingkaran di pojok kiri atas seperti di referensi */}
                                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm" style={{ borderColor: colors.sage, color: colors.sage, backgroundColor: colors.cardDark }}>
                                        3
                                    </div>
                                </div>

                                {/* Konten Teks Kartu */}
                                <div className="p-6 text-center relative">
                                    {/* Hiasan kecil di tengah */}
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45" style={{ backgroundColor: colors.cardDark, borderTop: `2px solid ${colors.sage}`, borderLeft: `2px solid ${colors.sage}` }}></div>

                                    <h4 className="font-serif text-2xl font-bold mb-2 tracking-wide" style={{ color: colors.cream }}>
                                        KOBOLD ARCHITECT
                                    </h4>
                                    <div className="w-12 h-0.5 mx-auto mb-4 opacity-30" style={{ backgroundColor: colors.sage }}></div>

                                    <p className="text-sm leading-relaxed opacity-80 font-medium" style={{ color: colors.cream }}>
                                        <span className="font-bold" style={{ color: colors.sage }}>Deploy:</span> Build a structure. Gain +2 Gold.
                                    </p>

                                    {/* Stats di bawah */}
                                    <div className="mt-6 flex justify-center items-center gap-6 font-bold text-xl" style={{ color: colors.cream }}>
                                        <div className="flex flex-col items-center">
                                            <span className="text-sm opacity-50 mb-1">ATK</span>
                                            <span style={{ color: '#ef4444' }}>2</span>
                                        </div>
                                        <div className="h-8 w-px bg-white/10"></div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-sm opacity-50 mb-1">HP</span>
                                            <span style={{ color: colors.sage }}>4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* --- BAGIAN KANAN (Teks Deskripsi - Placeholder) --- */}
                    <div className="w-full md:w-1/2 text-white">
                        <h2 className="text-5xl font-bold font-serif mb-6">What is <br /> <span style={{ color: colors.sage }}>Artefind?</span></h2>
                        <p className="text-lg opacity-80 mb-8">Deskripsi game anda disini...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardStack;