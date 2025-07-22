import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdSegment } from 'react-icons/md';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="sticky top-0  bg-white z-50 w-full h-[96px] flex items-center justify-between px-6 md:px-24 py-4 border-b border-b-[#0000001a]">
            {/* Logo */}
            <div className="w-[185px] h-[64px] -mt-2">
                <h1 className="font-inter text-[30px] font-bold italic text-[#1e3a8a]">
                    Relievo
                </h1>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex w-[595px] h-[30px] gap-[40px] justify-between items-center">
                <li>
                    <a
                        href="#home"
                        className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0] text-[#484848] hover:underline hover:decoration-black hover:underline-offset-4"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#works"
                        className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0] text-[#484848] hover:underline hover:decoration-black hover:underline-offset-4"
                    >
                        How it works
                    </a>
                </li>
                <li>
                    <a
                        href="#features"
                        className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0] text-[#484848] hover:underline hover:decoration-black hover:underline-offset-4"
                    >
                        Features
                    </a>
                </li>
                <li>
                    <a
                        href="#users"
                        className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0] text-[#484848] hover:underline hover:decoration-black hover:underline-offset-4"
                    >
                        Users
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="font-inter font-semibold text-[20px] leading-[30px] tracking-[0] text-[#484848] hover:underline hover:decoration-black hover:underline-offset-4"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Desktop CTA Button */}
            <button className="hidden md:flex items-center justify-center w-[190px] h-[46px] px-4 py-2 gap-[10px] bg-[#1E3A8A] rounded-[8px] font-inter font-semibold text-[20px] leading-[30px] tracking-[0] text-white cursor-pointer">
                Request a Demo
            </button>

            {/* Mobile Menu Toggle Icon */}
            <div className="md:hidden text-[28px] text-[#1e3a8a] cursor-pointer z-30" onClick={toggleMenu}>
                {isMenuOpen ? <IoMdClose /> : <MdSegment />}
            </div>

            {/* Mobile Menu Content */}
            <div
                className={`absolute top-[96px] left-0 w-full h-fit bg-white border-t border-[#00000010] flex flex-col items-start gap-6 px-6 py-6 transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                    }`}
            >
                <a href="#home" className="font-inter font-semibold text-[18px] text-[#484848]">Home</a>
                <a href="#works" className="font-inter font-semibold text-[18px] text-[#484848]">How it works</a>
                <a href="#features" className="font-inter font-semibold text-[18px] text-[#484848]">Features</a>
                <a href="#users" className="font-inter font-semibold text-[18px] text-[#484848]">Users</a>
                <a href="#contact" className="font-inter font-semibold text-[18px] text-[#484848]">Contact</a>
                <button className="w-full h-[46px] bg-[#1E3A8A] rounded-[8px] text-white font-inter font-semibold text-[18px] mt-4">
                    Request a Demo
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
