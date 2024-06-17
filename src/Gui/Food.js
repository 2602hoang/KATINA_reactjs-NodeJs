import React from 'react'
import Header from '../Component/Header'
import Footter from '../Component/Footter'

function Food() {
  return (
    <div style={{

        backgroundColor: "#cfe887",
  
      }}
        className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
        <Header />
        <div className='h-auto mt-[65px] w-full min-h-screen px-5'>

  
<div class="relative flex w-80 mt-[25px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg 
  shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Giá
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    tên:
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg  bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Đặt hàng
    </button>
  </div>
</div>
          

        </div>
        <Footter/>

    </div>
  )
}

export default Food
{/* <div
class="card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden"
>
<div class="absolute top-0 left-0 h-full w-full bg-[#fff8dc]"></div>

<div
  class="container text-black z-[2] relative font-nunito flex flex-col gap-[0.5em]"
>
  <div class="h-fit w-full">
    <h1
      // style="font-weight: 900;
      //         -webkit-text-fill-color: transparent;
      //         -webkit-text-stroke-width: 1px;"
      class="card_heading text-[1.5em] tracking-[.2em]"
    >
      STEEL BALL RUN
    </h1>
    <p
      // style="font-weight: 900;
      //         -webkit-text-fill-color: transparent;
      //         -webkit-text-stroke-width: 1px;
      //         text-shadow: 0 0 7px #fff;"
      class="text-[1.2em]"
    >
      By Hirohiko Araki
    </p>
  </div>

  <div class="flex justify-left items-center h-fit w-full gap-[1.5em]">
    <div class="w-fit h-fit flex justify-left gap-[0.5em]">
      <svg
        fill="#222222"
        class="h-[1em] w-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
        ></path>
      </svg>
      <svg
        fill="#222222"
        class="h-[1em] w-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
        ></path>
      </svg>
      <svg
        fill="#222222"
        class="h-[1em] w-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
        ></path>
      </svg>
      <svg
        fill="#222222"
        class="h-[1em] w-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
        ></path>
      </svg>
      <svg
        fill="#222222"
        class="h-[1em] w-[1em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          d="M288 439.6l-130.9 68.7C152.2 510.8 147.1 512 142.2 512c-18.59 0-35.17-16.66-31.61-37.45l25.04-145.5L29.72 226.1C10.68 207.6 21.2 175.3 47.47 171.5l146.4-21.29l65.43-132.4c5.883-11.91 17.33-17.8 28.73-17.8c.0234 0-.0234 0 0 0L288 439.6z"
        ></path>
      </svg>
    </div>

    <div class="w-fit h-fit text-black font-nunito text-[1.2em] font-light">
      <p>4.5/5 stars</p>
    </div>
  </div>

  <div class="flex justify-center items-center h-fit w-fit gap-[0.5em]">
    <div
      class="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer"
    >
      <p>Drama</p>
    </div>
    <div
      class="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer"
    >
      <p>Action</p>
    </div>
    <div
      class="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer"
    >
      <p>Balls</p>
    </div>
  </div>
</div>
<p
  class="font-nunito block text-blackfont-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden"
>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet officiis,
  dolorem ab animi magnam culpa fugit error voluptates adipisci, debitis ut
  fuga at nisi laborum suscipit a eos similique unde.
</p>
</div> */}