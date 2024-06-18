import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footter from '../Component/Footter'
import axios from 'axios';
import a from "../asset/food.png"
import { List, Select } from 'antd';
import Aos from 'aos';
const { Option } = Select;
function formatCurrency(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
function Food() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to fetch drink data
  const getFood = async () => {
    try {
      const response = await axios.get('http://localhost/PHP/api/api_v1/getfood.php');
      setFood(response.data.data); // Assuming the structure of response.data contains 'data'
      // console.log(response.data); // Optional: Log the entire response for debugging
    } catch (error) {
      console.error('Error fetching Food data:', error);
    }
  };

  // Function to extract unique categories from drink data
  const extractCategories = () => {
    const uniqueCategories = [...new Set(food.map(item => item.tenLoai))];
    setCategories(uniqueCategories);
  };

  // Function to filter drink based on selected category
  const filterFood = (category) => {
    if (category === '') {
      setFilteredFood(food);
    } else {
      const filtered = food.filter(item => item.tenLoai === category);
      setFilteredFood(filtered);
    }
    setSelectedCategory(category);
  };

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    getFood();
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  // useEffect hook to extract categories after drink state is updated
  useEffect(() => {
    extractCategories();
  }, [food]); // Run whenever drink state changes

  // useEffect hook to initially set filtered drink to all products
  useEffect(() => {
    setFilteredFood(food);
  }, [food]); // Run whenever drink state changes
  return (
    <div style={{

        backgroundColor: "#fdc323",
  
      }}
        className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
        <Header />
        <div className='min-h-screen h-auto w-full flex flex-col mt-[65px] text-center'>
        <h1>Trà Sữa nhà làm</h1>

        {/* Category filter dropdown */}
        <div className='flex justify-center items-center'>
     
        {/* Category filter dropdown */}
        <Select
          style={{ width: 200, marginBottom: 16 }}
          placeholder="Chọn loại sản phẩm"
          onChange={filterFood}
          value={selectedCategory}
        >
          <Option value="">Tất cả</Option>
          {categories.map((category, index) => (
            <Option key={index} value={category}>{category}</Option>
          ))}
        </Select>
        </div>
        {/* Render filtered products */}
        <div className='  md:h-[auto] w-full px-1 md:px-1 justify-center items-center'>
          <List
            grid={{
              gutter: 8,
              xs: 2,  // 1 column on screens smaller than 576px
              sm: 2,  // 2 columns on screens equal to or greater than 576px
              md: 4,  // 4 columns on screens equal to or greater than 768px
              lg: 4,  // 4 columns on screens equal to or greater than 992px
              xl: 4,  // 4 columns on screens equal to or greater than 1200px
              xxl: 4, // 4 columns on screens equal to or greater than 1600px

            }}
            
            dataSource={filteredFood}
            renderItem={(item) => (
              <List.Item className='md:w-[300px] w-full h-auto md:h-[300px]
               justify-center items-center'>
                <div
                data-aos="flip-up"
                className='relative justify-center md:w-[300px]
                 items-center w-[full]  md:h-[300px] h-[300px] mx-2 my-5 md:my-2'>

                <div class="relative flex w-[full]  md:h-[300px] h-[300px] mt-[25px] flex-col bg-[#ec6083]
                 rounded-xl border-2 border-white hover:bg-[#7ae284] hover:shadow-[black] hover:scale-105 shadow-2xl">
                  <div 
                  style={{ backgroundImage: `url(${a})` ,backgroundSize:'100% 100%' ,backgroundrepeat:"no-repeat",     backgroundPosition: 'center',}}
                  class="relative mx-4 -mt-6 h-40  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg 
                  shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  </div>
                  <div class="p-2 text-center">
                    <h5 class="mb-2 block text-black font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       {item.food}
                    </h5>
                    
                  </div>
                  <div class="p-2 pt-0">
                    <p class="block text-black font-black font-sans text-base  leading-relaxed text-inherit antialiased">
                    Đơn Giá: {formatCurrency(item.giaSp1)} 
                    </p>
                    <button data-ripple-light="true" type="button" class="select-none rounded-lg  bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                      Đặt hàng
                    </button>
                  </div>
                </div>
                </div>
              </List.Item>
            )}
          />
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