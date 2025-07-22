import React from 'react';
import frame36 from '../../assets/Frame 36.png';
import frame35 from '../../assets/Frame 35.png';
import frame37 from '../../assets/Frame 37.png';
import frame38 from '../../assets/Frame 38.png';

const Works = () => {
    return (
        <section className='w-full min-h-screen flex flex-col items-center px-4'>
            <div className='w-full max-w-[1026px] gap-[16px] flex flex-col items-center mt-20 text-center'>
                <h3 className='font-inter font-bold text-[32px] leading-[48px] bg-[linear-gradient(90deg,#1E3A8A_0%,#080F24_100%)] text-transparent bg-clip-text'>
                    How It Works
                </h3>
                <h3 className='font-inter font-bold text-[32px] leading-[48px] text-[#1E3A8A] px-4 py-2 rounded'>
                    From Request To Relief - Even Offline
                </h3>
                <p className='font-inter font-semibold text-[20px] leading-[30px] text-[#484848] px-4 py-2 rounded max-w-3xl'>
                    A 4-step process that enables users to request aid, verify identity, track progress, and receive support seamlessly, even without internet access.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:gap-6 mt-20 space-y-10 md:space-y-0'>
                <img src={frame36} alt="image card" className='w-full max-w-[300px]' />
                <img src={frame35} alt="image card" className='w-full max-w-[300px]' />
                <img src={frame37} alt="image card" className='w-full max-w-[300px]' />
            </div>

            <div className='mt-[3rem] mb-[3rem]'>
                <img src={frame38} alt="image card" className='w-full max-w-[300px]' />
            </div>
        </section>
    )
}

export default Works;
