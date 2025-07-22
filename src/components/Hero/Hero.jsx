import React from 'react';
import frame4 from '../../assets/Frame 4.png';

const Hero = () => {
    return (
        <section className="w-full h-[720px] top-[96px]">
            <img
                src={frame4}
                alt="ngo-image"
                className="w-full h-full object-cover"
            />
        </section>
    );
};

export default Hero;
