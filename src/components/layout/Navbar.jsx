import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Heart, Ghost, Play, User, Sparkles, Scroll, Book, Download } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'Beranda', id: 'home' },     // Pastikan section Beranda punya id="home"
        { name: 'Tentang', id: 'about' },    // Pastikan section Tentang punya id="about"
        { name: 'Fitur', id: 'features' },
        { name: 'Tim Kami', id: 'team' }
    ];

    const handleScroll = (e, id) => {
        e.preventDefault(); // Mencegah URL berubah jadi #about
        const element = document.getElementById(id);

        if (element) {
            // Lakukan scroll mulus
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'bg-[rgb(49,54,71)]/90 backdrop-blur-lg py-4 shadow-lg border-b border-[rgb(163,176,135)]/30' : 'bg-transparent py-6'
                }`}
        >
            <div className="container  px-6 w-full flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        {/* Logo Background: Sage Green */}
                        <div className="w-12 h-12 bg-[rgb(163,176,135)] rounded-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 shadow-lg border border-[rgb(255,248,212)]/50 flex items-center justify-center">
                            <Gamepad2 size={22} className="text-[rgb(49,54,71)]" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[rgb(255,248,212)] rounded-full animate-ping"></div>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-nusantara text-4xl font-bold tracking-wide text-[rgb(255,248,212)]">Arte<span className="text-[rgb(163,176,135)]">Find</span></span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.id}`} // Fallback untuk SEO/aksesibilitas
                            onClick={(e) => handleScroll(e, item.id)} // Event handler custom
                            className="relative text-xl font-bold text-gray-300 hover:text-[rgb(255,248,212)] transition-colors py-2 group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(163,176,135)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-[rgb(255,248,212)] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[rgb(67,86,99)] border-t border-[rgb(163,176,135)]/30 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.id}`} // Fallback untuk SEO/aksesibilitas
                            onClick={(e) => handleScroll(e, item.id)} // Event handler custom
                            className="relative text-xl font-bold text-gray-300 hover:text-[rgb(255,248,212)] transition-colors py-2 group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(163,176,135)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar;