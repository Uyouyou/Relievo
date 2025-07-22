import React from 'react';
import frame13 from '../../assets/Frame 13.png';
import group1 from '../../assets/Group 1.png';
import group3 from '../../assets/Group 3.png';
import group2 from '../../assets/Group 2.png';

const Problem = () => {
    return (
        <section className="bg-[linear-gradient(180deg,rgba(30,58,138,0.75)_62.98%,rgba(8,15,36,0.75)_100%)] w-full py-12 px-4 md:px-8 relative overflow-hidden">

            {/* Top Icons */}
            <div className="flex justify-between items-center mb-4">
                <img className="w-[60px] md:w-auto ml-2" src={group2} alt="circle icon left" />
                <img className="w-[60px] md:w-auto mr-2" src={group1} alt="circle icon right" />
            </div>

            {/* Center Text */}
            <div className="flex items-center justify-center text-center px-4">
                <div className="max-w-[1049px] w-full flex flex-col items-center gap-2 py-8">
                    <h3 className="font-inter font-bold text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-white">
                        When Disaster Strikes, Many Are Left Behind
                    </h3>
                    <p className="font-inter font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#ffffffcc]">
                        Millions in rural, disaster-prone regions face barriers to humanitarian relief systems that assume internet access, smartphone ownership or English literacy. Aid request becomes. Tracking is opaque, Trust is lost.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
                {/* Left image with background icon behind */}
                <div className="relative">
                    <img
                        className="w-full max-w-[720px] h-auto mx-auto z-10 relative"
                        src={frame13}
                        alt="Deserted place"
                    />
                    {/* Positioned group2 icon behind image */}
                    <img
                        className="absolute -top-10 -left-10 z-0 w-32 md:w-40"
                        src={group2}
                        alt="background icon"
                    />
                </div>

                {/* Problem List */}
                <div className="max-w-[420px] w-full flex flex-col gap-6 z-10">
                    <h3 className="font-inter font-bold text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-white">
                        Problem Areas
                    </h3>
                    <ul className="flex flex-col gap-4">
                        {[
                            'No internet or smartphone access',
                            'Language barriers exclude vulnerable groups',
                            'Lack of transparency in aid delivery',
                            'Difficult accountability for NGOs and government',
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="w-2 h-2 mt-1 rounded-full bg-white flex-shrink-0"></span>
                                <span className="font-inter font-semibold text-[16px] leading-[24px] text-[#FFFFFFE5]">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Icons */}
            <div className="flex justify-between items-center mt-[-8rem] md:mt-[-12rem] relative z-0">
                <img className="ml-4 w-[80px] md:w-auto" src={group2} alt="circle image icons" />
                <img className="mr-4 w-[80px] md:w-auto" src={group3} alt="circle image icons" />
            </div>
        </section>
    );
};

export default Problem;
