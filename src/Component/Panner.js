import { Carousel } from 'antd';
import React from 'react';
import logo from "../asset/logo.png";
import h1 from "../asset/menu.png";
import h2 from "../asset/menu1.png";
import h3 from "../asset/quan.png";
import h4 from "../asset/panner.png";

export default function Panner() {
  const images = [logo, h1, h2, h3, h4];

  return (
    <div data-aos="fade-up" className='bg-black md:w-full w-full md:h-screen mt-[60px] h-[300px]'>
      <Carousel arrows dots="true" autoplay speed={1500} autoplaySpeed={1500} effect="fade">
        {images.map((image, index) => (
          <div key={index} className='flex justify-center items-center w-full md:h-screen'>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize:window.innerWidth >= 768? "100% 100vh":"100% 300px",
                backgroundrepeat:"no-repeat",
                backgroundPosition: 'center',
                height: window.innerWidth >= 768 ?"100vh":"300px",
                width: window.innerWidth >= 768 ?"100%" :"100%",
              }}
              
              className=' justify-center items-center flex'
            />
            
          </div>
        ))}
      </Carousel>
    </div>
  );
}




