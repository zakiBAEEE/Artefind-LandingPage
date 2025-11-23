import React from "react";
import { Mail, Instagram, Award } from "lucide-react";

// Import gambar (Pastikan path ini benar sesuai folder Anda)
import darren from '../assets/img/darren.png';
import rehan from '../assets/img/rehan.png';
import nopal from '../assets/img/nopal.png';
import ovan from '../assets/img/ovan.png';

// --- 1. DATA STRUKTUR ---
const teamMembers = [
    {
        id: 1,
        name: "Darren Lowell",
        role: "Project Lead & Game Designer",
        email: "darren.l@budayago.id",
        instagram: "sasudar.urano",
        photoUrl: darren,
        isLeader: true,
    },
    {
        id: 2,
        name: "Tria Nanda Mughny",
        role: "Frontend Developer",
        email: "siti.n@budayago.id",
        instagram: "@siti_codes",
        photoUrl: rehan,
    },
    {
        id: 3,
        name: "Ovan Kurniawan",
        role: "Game Developer",
        email: "budi.s@budayago.id",
        instagram: "@budisan_db",
        photoUrl: ovan,
    },
    {
        id: 4,
        name: "Ahmad Naufal",
        role: "Game Developer",
        email: "citra.k@budayago.id",
        instagram: "pallio.md",
        photoUrl: nopal,
    },
    {
        id: 5,
        name: "Muhammad Dzaky Raihan",
        role: "Frontend Developer",
        email: "dimas.a@budayago.id",
        instagram: "dzakyrahn",
        photoUrl: rehan,
    },
];

const UkirCorner = ({ className, rotate }) => (
    <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute pointer-events-none z-30 ${className}`}
        style={{ transform: `rotate(${rotate}deg)` }}
    >
        {/* Motif Sulur/Daun Sederhana */}
        <path d="M5 5 L 25 5 C 35 5 45 15 45 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-[rgb(255,248,212)]" />
        <path d="M5 5 L 5 25 C 5 35 15 45 25 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-[rgb(255,248,212)]" />
        <circle cx="5" cy="5" r="3" fill="currentColor" className="text-[rgb(163,176,135)]" />
        <path d="M15 15 C 25 15 30 20 30 30" stroke="currentColor" strokeWidth="1.5" className="text-[rgb(163,176,135)]" />
    </svg>
);

// --- 2. SUB-COMPONENT: KARTU ANGGOTA ---
const TeamMemberCard = ({ member }) => {
    return (
        <div className={`group flex flex-col items-center text-center ${member.isLeader ? 'md:col-span-2 lg:col-span-1 lg:mb-8' : ''}`}>

            {/* --- AESTHETIC CULTURAL FRAME --- */}
            {/* PERBAIKAN 1: Pastikan ukuran frame induk tetap (fixed size) */}
            <div className="relative mb-6 w-48 h-48 cursor-pointer">

                {/* Layer 3: Back Glow */}
                <div className="absolute inset-0 bg-[rgb(163,176,135)]/30 rounded-[2rem] rotate-[-8deg] group-hover:rotate-0 transition-transform duration-500 ease-out blur-sm"></div>

                {/* Layer 2: Middle Border */}
                <div className="absolute inset-0 border-2 border-[rgb(255,248,212)]/40 rounded-[2rem] rotate-[6deg] group-hover:rotate-0 transition-transform duration-500 ease-out delay-75"></div>

                {/* Layer 1: Main Container (Wadah Foto) */}
                {/* PERBAIKAN 2: overflow-hidden HARUS ada di sini agar foto tidak bocor keluar rounded corner */}
                <div className="absolute inset-2 bg-[rgb(30,35,48)] rounded-[1.5rem] overflow-hidden border border-[rgb(163,176,135)]/60 shadow-xl group-hover:scale-[1.02] transition-transform duration-300 z-10 relative w-48 h-48">

                    {/* Leader Badge */}
                    {member.isLeader && (
                        <div className="absolute top-2 right-2 z-20 bg-[rgb(255,248,212)] text-[rgb(49,54,71)] p-1 rounded-full shadow-sm" title="Team Leader">
                            <Award size={16} />
                        </div>
                    )}

                    {/* The Photo */}
                    {/* PERBAIKAN 3: Ganti object-fill jadi object-cover */}
                    {/* The Photo */}
                    <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />


                    {/* Overlay Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h10v10h-10zM0 10h10v10h-10zM10 0h10v10h-10zM0 0h10v10h-10z' fill='none' stroke='%23fff8d4' stroke-width='0.5'/%3E%3C/svg%3E")` }}></div>
                </div>
            </div>

            {/* --- MEMBER INFO --- */}
            <div className="space-y-1 z-20">
                <h3 className="text-2xl font-nusantara text-[rgb(255,248,212)]">
                    {member.name}
                </h3>
                <p className="text-[rgb(163,176,135)] font-mono text-sm uppercase tracking-wider font-bold pb-2">
                    {member.role}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-2 border-t border-[rgb(163,176,135)]/20 w-full max-w-[120px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[rgb(255,248,212)] transition-colors p-1 hover:bg-white/10 rounded-full">
                        <Mail size={18} />
                    </a>
                    <a href={`https://instagram.com/${member.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[rgb(255,248,212)] transition-colors p-1 hover:bg-white/10 rounded-full">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};


// --- 3. MAIN COMPONENT: OUR TEAM SECTION ---
function OurTeam() {
    const leader = teamMembers.find(m => m.isLeader);
    const members = teamMembers.filter(m => !m.isLeader);

    return (
        <section className="relative py-5 overflow-hidden scroll-mt-44" id="team">

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-[rgb(163,176,135)] opacity-50"></div>
                        <span className="text-[rgb(163,176,135)] font-mono font-bold uppercase tracking-[0.2em] text-lg">Tim Srikode</span>
                        <div className="h-[2px] w-12 bg-[rgb(163,176,135)] opacity-50"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight drop-shadow-lg">
                        Para Penjaga <span className="text-[rgb(163,176,135)]">Artefak</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed md:mt-0 mt-7">
                        Di balik Artefind, ada lima pikiran kreatif yang berdedikasi untuk menjembatani kekayaan masa lalu dengan teknologi masa depan.
                    </p>
                </div>

                {/* --- GRID LAYOUT --- */}
                <div className="flex flex-col items-center">
                    {/* Row 1: The Leader */}
                    <div className="mb-5 md:mb-7 w-full flex justify-center">
                        <TeamMemberCard member={leader} />
                    </div>

                    {/* Row 2: The Members */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 w-full md:gap-0 gap-y-3">
                        {members.map(member => (
                            <TeamMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OurTeam;