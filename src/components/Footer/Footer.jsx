import React from 'react';
import linkedin from '../../assets/linkedin.png';
import fb from '../../assets/fb.png';
import ig from '../../assets/ig.png';
import x from '../../assets/x.png';

const Footer = () => {
    return (
        <footer className="w-full bg-[#2f2f2f] flex flex-col items-center gap-4 py-10 px-4">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 max-w-[1440px] w-full">
                {/* Logo Section */}
                <div className="w-full md:w-[262px] flex flex-col items-start gap-2 md:ml-16">
                    <h1 className="font-inter text-[30px] font-bold italic text-[#ffffff]">Relievo</h1>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#ffffffcc]">
                        Inclusive Disaster Aid Technology
                    </p>
                </div>

                {/* Features Section */}
                <div className="w-full md:w-[157px] flex flex-col gap-2 text-start">
                    <h4 className="font-inter font-semibold text-[24px] leading-[36px] text-[#ffffffcc] mt-0 mb-2">
                        Features
                    </h4>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">Aid wallet profile</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">QR Code Access</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">Multi-lingual UI</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">Offline Functionality</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">Status Tracker</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC]">Admin Dashboard</p>
                </div>

                {/* Users Section */}
                <div className="w-full md:w-[157px] flex flex-col gap-2 text-start">
                    <h4 className="font-inter font-semibold text-[24px] leading-[36px] text-[#ffffffcc] mt-0 mb-2">
                        Users
                    </h4>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">Disaster Survivors</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] mb-1">NGOs</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] whitespace-nowrap mb-1">
                        Humanitarian Agencies
                    </p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] whitespace-nowrap">
                        Government Responders
                    </p>
                </div>

                {/* Contact Section */}
                <div className="w-full md:w-[157px] flex flex-col gap-2 text-start">
                    <h4 className="font-inter font-semibold text-[24px] leading-[36px] text-[#ffffffcc] mt-0 mb-2">
                        Contact Us
                    </h4>
                    <a
                        href="mailto:info@relievo.org"
                        className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] underline mb-2"
                    >
                        info@relievo.org
                    </a>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin-icon" className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="facebook-icon" className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={ig} alt="instagram-icon" className="w-6 h-6" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="twitter-icon" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-20 px-4">
                <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFCC] whitespace-nowrap">
                    &copy; 2025 Relievo. All rights reserved.
                </p>
                <div className="flex gap-8 text-[#FFFFFFCC]">
                    <p className="font-inter font-semibold text-[16px] leading-[24px] whitespace-nowrap cursor-pointer">Privacy Policy</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] whitespace-nowrap cursor-pointer">Terms of Service</p>
                    <p className="font-inter font-semibold text-[16px] leading-[24px] whitespace-nowrap cursor-pointer">Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
