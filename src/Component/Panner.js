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
    <div data-aos="fade-up" className='bg-black md:w-full w-full md:h-[670px] mt-[60px] h-[300px]'>
      <Carousel arrows dots="true" autoplay speed={1500} autoplaySpeed={1500} effect="fade">
        {images.map((image, index) => (
          <div key={index} className='flex justify-center items-center w-full'>
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize:window.innerWidth >= 768? "100% 670px":"100% 300px",
                backgroundrepeat:"no-repeat",
                backgroundPosition: 'center',
                height: window.innerWidth >= 768 ?"670px":"300px",
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



// import { Carousel, Image } from 'antd'
// import React from 'react'
// import logo from "../asset/logo.png"
// import h1 from "../asset/menu.png"
// import h2 from "../asset/menu1.png"
// import h3 from "../asset/quan.png"
// import h4 from "../asset/panner.png"
// export default function Panner () {
//   return (
//     <div className='bg-black md:w-4/5 md:mt-[70px]  '>
//         <Carousel arrows  dots="true" autoplay speed={1500 } autoplaySpeed={1500} effect="fade"    >
                  
//                 <div className='flex justify-center items-center w-full '> 
//                     <div style={{backgroundImage:}} className='md:h-[600px] w-[auto] justify-center  items-center flex'>
//                     {/* <img className=' w-full' src={logo}/> */}
//                     </div>
//                 </div>  
//                 <div className='flex justify-center items-center w-full'> 
//                     <div style={{backgroundImage:}} className='md:h-[600px] w-[auto]  justify-center items-center flex'>
//                     {/* <img className=' w-full' src={h1} /> */}
//                     </div>
//                 </div>  
//                 <div className='flex justify-center items-center w-full'> 
//                     <div style={{backgroundImage:}} className='md:h-[600px] w-[auto]  justify-center items-center flex'>
//                     {/* <img className=' w-full' src={h2} /> */}
//                     </div>
//                 </div>  
//                 <div className='flex justify-center items-center w-full'> 
//                     <div style={{backgroundImage:}} className='md:h-[600px] w-[auto]  justify-center items-center flex'>
//                     {/* <img className=' w-full' src={h3} /> */}
//                     </div>
//                 </div>  
//                 <div className='flex justify-center items-center w-full'> 
//                     <div style={{backgroundImage:}} className='md:h-[600px] w-[auto]  justify-center items-center flex'>
//                     {/* <img className=' w-full' src={h4} /> */}
//                     </div>
//                 </div>     
                   

                

//         </Carousel>
//      </div>

//   )
// }
