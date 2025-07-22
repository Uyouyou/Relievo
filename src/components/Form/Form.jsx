import React from 'react';
import group2 from '../../assets/Group 2.png';
import group1 from '../../assets/group 1.png';

const Form = () => {
    return (
        <section className='bg-[linear-gradient(180deg,rgba(30,58,138,0.75)_62.98%,rgba(8,15,36,0.75)_100%)] w-full min-h-screen py-10 px-4 relative'>
            {/* Top-right image */}
            <div className='flex justify-end items-center mb-6'>
                <img src={group1} alt="circle image icon" className="w-20 md:w-auto" />
            </div>

            {/* Header and Description */}
            <div className="flex justify-center px-4 text-center">
                <div className="w-full max-w-[1049px] flex flex-col items-center gap-4">
                    <h3 className="font-inter font-bold text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] text-white">
                        Partner With Us To Bring Relief Where It’s Needed Most
                    </h3>
                    <p className="font-inter font-semibold text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#ffffffcc]">
                        Are you an NGO, Government Agency or Donor organization committed to delivering aid fairly and efficiently? Let’s work together to scale Relievo in vulnerable communities. From pilots to national deployments, we’re ready to collaborate.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="w-full flex justify-center items-center mt-10">
                <form action="#" className='w-full max-w-[593px] p-4 flex flex-col gap-6'>
                    <input
                        className='w-full h-[56px] rounded-[8px] border border-white p-4 font-inter text-[16px] leading-[24px] text-white bg-transparent outline-0 placeholder-white'
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Name'
                    />
                    <input
                        className='w-full h-[56px] rounded-[8px] border border-white p-4 font-inter text-[16px] leading-[24px] text-white bg-transparent outline-0 placeholder-white'
                        type="text"
                        name="organization"
                        id="organization"
                        placeholder='Organization'
                    />
                    <input
                        className='w-full h-[56px] rounded-[8px] border border-white p-4 font-inter text-[16px] leading-[24px] text-white bg-transparent outline-0 placeholder-white'
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                    />
                    <textarea
                        className='w-full h-[180px] rounded-[8px] border border-white p-4 font-inter text-[16px] leading-[24px] text-white bg-transparent outline-0 resize-none placeholder-white'
                        name="message"
                        id="message"
                        placeholder='Message'
                    ></textarea>
                    <button
                        type="submit"
                        className='w-full md:w-[240px] h-[56px] rounded-[8px] bg-white font-inter font-semibold text-[18px] text-[#484848] mx-auto'
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Bottom-left image */}
            <div className='flex justify-start mt-16'>
                <img src={group2} alt="image circle icon" className="w-28 md:w-auto" />
            </div>
        </section>
    );
};

export default Form;
