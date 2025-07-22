import React from 'react';
import frame27 from '../../assets/Frame 27.png';
import frame28 from '../../assets/Frame 28.png';
import frame29 from '../../assets/Frame 29.png';
import frame30 from '../../assets/Frame 30.png';
import frame31 from '../../assets/Frame 31.png';

const Solution = () => {
    return (
        <section className="bg-[linear-gradient(141.98deg,_#F5F5F5_46%,_#6F7EE4_83.55%)] w-full py-12 px-4 flex flex-col items-center gap-10">
            {/* Text Section */}
            <div className="max-w-[1124px] w-full text-center flex flex-col items-center gap-4">
                <h4 className="font-inter font-semibold text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] bg-[linear-gradient(90deg,_#1E3A8A_0%,_#080F24_100%)] text-transparent bg-clip-text">
                    Our Solution
                </h4>
                <h3 className="font-inter font-bold text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] text-[#1E3A8A]">
                    Relievo Makes Relief Simple: Local and Inclusive
                </h3>
                <p className="font-inter font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#484848]">
                    Relievo is an offline-first multilingual disaster aid platform designed for real-world conditions. Survivors can request help, receive updates and verify aid in their own language - without internet access. NGOs, Governments and Donors gain clear visibility into distribution and impact.
                </p>
            </div>

            {/* First Row of Images */}
            <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4 mt-6">
                <img src={frame27} alt="image description" className="w-[90%] sm:w-[45%] md:w-[30%]" />
                <img src={frame28} alt="image description" className="w-[90%] sm:w-[45%] md:w-[30%]" />
                <img src={frame29} alt="image description" className="w-[90%] sm:w-[45%] md:w-[30%]" />
            </div>

            {/* Second Row of Images */}
            <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 mt-6">
                <img src={frame30} alt="image description" className="w-[90%] sm:w-[45%] md:w-[45%]" />
                <img src={frame31} alt="image description" className="w-[90%] sm:w-[45%] md:w-[45%]" />
            </div>
        </section>
    );
};

export default Solution;
