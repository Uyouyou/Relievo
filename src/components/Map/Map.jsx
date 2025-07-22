import React from 'react';
import Phone from '../../assets/phone.png';
import map from '../../assets/map.png';

const Map = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4 h-auto md:h-[480px]">
                {/* Phone Image */}
                <img
                    src={Phone}
                    alt="phone"
                    className="w-full md:w-[612px] h-auto object-contain"
                />

                {/* Map Image */}
                <img
                    src={map}
                    alt="map"
                    className="w-full md:w-[612px] h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default Map;
