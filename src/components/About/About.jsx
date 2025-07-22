import React from 'react';
import { IoIosPlayCircle } from "react-icons/io";

const About = () => {
    return (
        <section className="w-full px-6 md:px-12 lg:px-0 flex justify-center">
            <div className="max-w-[980px] w-full py-12 flex flex-col items-center gap-[40px] text-center">
                {/* Title */}
                <h2 className="font-inter font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[48px] md:leading-[60px] lg:leading-[72px] tracking-[0] text-[#1e3a8a]">
                    Disaster Relief That Works In Multiple Languages Even Without Internet
                </h2>

                {/* Description */}
                <p className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] md:leading-[30px] tracking-[0] text-[#484848] max-w-3xl">
                    Relievo is a multilingual, offline-first platform that empowers disaster survivors to request and receive aid seamlessly, while giving NGOs and Government transparent tracking and accountability.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[24px] w-full md:w-auto">
                    <button className="relative w-full md:w-[224px] h-[62px] px-4 py-4 border border-[#484848] rounded-[8px] font-inter font-semibold text-[18px] md:text-[20px] leading-[30px] text-[#484848] cursor-pointer ">
                        Request a Demo
                        <IoIosPlayCircle className="absolute right-2 top-[50%] translate-y-[-50%] text-[24px] mt-[0.2rem]" />
                    </button>
                    <button className="w-full md:w-[180px] h-[62px] px-4 py-4 bg-[#1E3A8A] rounded-[8px] text-white font-inter font-semibold text-[16px] cursor-pointer">
                        Partner with us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
