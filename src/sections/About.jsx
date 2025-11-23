import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Card from '../components/layout/Card';

const AboutSection = () => {
    // Definisi warna untuk TEKS dan KARTU saja (Background section dihapus)
    const colors = {
        slate: 'rgb(67, 86, 99)',     // Background Kartu Belakang
        sage: 'rgb(163, 176, 135)',   // Aksen/Highlight
        cream: 'rgb(255, 248, 212)',  // Teks Utama
        cardDark: '#2a2e3d'           // Warna dasar kartu utama
    };

    return (
        // HAPUS: style background color & gradient overlay
        // Section ini sekarang transparan
        <section className="relative w-full py-20 overflow-visible z-10">

            <div className=" mx-auto px-6 md:px-12 scroll-mt-44" id='about'>
                <div className="flex flex-col md:flex-row  gap-x-16">

                    {/* --- BAGIAN KIRI: VISUAL KARTU (Fanned Cards) --- */}
                    <div className="w-full md:w-2/3 relative min-h-[500px] flex items-center justify-center p-10 overflow-hidden ">

                        {/* Container untuk menahan agar kartu tidak keluar batas lebar div */}
                        <div className="relative w-full max-w-3xl flex flex-wrap justify-center items-center gap-6 md:gap-10">

                            {/* --- KARTU 1: Naga HITAM --- 
            Posisi: Miring Kiri Tajam, Seolah dilempar dari kiri atas
        */}
                            <div className="w-48 transform transition-all duration-500 ease-out 
            rotate-[-15deg] translate-y-2 translate-x-4
            hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-2xl z-10">
                                <Card
                                    pictureLink={"https://plus.unsplash.com/premium_photo-1670267552055-8f33a55c1af0?q=80&w=1170&auto=format&fit=crop"}
                                    title={"Naga HITAM"}
                                    description={"Item Magis +10 wawasan"}
                                />
                            </div>

                            {/* --- KARTU 2: Pedang HYTAMM --- 
            Posisi: Miring Kanan, Sedikit menumpuk kartu 1
        */}
                            <div className="w-48 transform transition-all duration-500 ease-out 
            rotate-[12deg] -translate-y-8 -translate-x-2
            hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-2xl z-20">
                                <Card
                                    pictureLink={"https://images.unsplash.com/photo-1689493720779-f762ab7bb5ae?q=80&w=687&auto=format&fit=crop"}
                                    title={"Pedang HYTAMM"}
                                    description={"Item Magis +10 wawasan"}
                                />
                            </div>

                            {/* --- KARTU 3: The Lost Keris (Fokus Tengah) --- 
            Posisi: Hampir lurus tapi miring dikit, di bawah
        */}
                            <div className="w-52 transform transition-all duration-500 ease-out 
            rotate-[-5deg] translate-y-6 z-30
            hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-2xl">
                                <Card
                                    pictureLink={"https://images.unsplash.com/photo-1642609628537-fb6a4e67e3a5?q=80&w=687&auto=format&fit=crop"}
                                    title={"The Lost Keris"}
                                    description={"Temukan keris langka +5 wawasan"}
                                />
                            </div>

                            {/* --- KARTU 4: Zirah Legendaris --- 
            Posisi: Miring Kanan Ekstrim, seolah tergelincir
        */}
                            <div className="w-48 transform transition-all duration-500 ease-out 
            rotate-[25deg] -translate-y-12 -translate-x-6
            hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-2xl z-10">
                                <Card
                                    pictureLink={"https://plus.unsplash.com/premium_photo-1698170370603-62f83e96d04e?q=80&w=687&auto=format&fit=crop"}
                                    title={"Zirah Legendaris"}
                                    description={"Item Magis +10 wawasan"}
                                />
                            </div>

                        </div>
                    </div>

                    {/* --- BAGIAN KANAN: TEKS DESKRIPSI --- */}
                    <div className="w-full container md:w-3/4 text-left space-y-6 flex flex-col gap-y-4 items-center md:mt-32">
                        <div className='w-3/4 flex flex-col gap-y-9'>
                            <h2
                                className="text-4xl md:text-6xl font-bold font-serif leading-tight drop-shadow-lg"
                                style={{ color: colors.cream }}
                            >
                                Apa itu <br />
                                <span className="italic" style={{ color: colors.sage }}>Artefind?</span>
                            </h2>

                            <div className="space-y-4">
                                <p className="text-lg leading-relaxed opacity-90 font-sans drop-shadow-md" style={{ color: colors.cream }}>
                                    Artefind adalah perpaduan unik antara <b style={{ color: colors.sage }}>Game Kartu Koleksi (CCG)</b> dan eksplorasi Budaya Nusantara.
                                </p>
                                <p className="text-base leading-relaxed opacity-70 font-sans drop-shadow-md" style={{ color: colors.cream }}>
                                    Kumpulkan artefak langka, pelajari kisah di baliknya, dan gunakan pengetahuanmu untuk memecahkan misteri kuno.
                                </p>
                            </div>

                            {/* Tombol CTA */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <button
                                    className="group flex items-center gap-3 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    style={{ backgroundColor: colors.sage, color: '#313647' }}
                                >
                                    <Play size={18} className="fill-current" />
                                    Tonton Trailer
                                </button>

                                <button
                                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium border transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                                    style={{ borderColor: colors.sage, color: colors.sage }}
                                >
                                    Pelajari Gameplay
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;