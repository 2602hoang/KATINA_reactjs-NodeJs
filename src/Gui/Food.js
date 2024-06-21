import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footter from '../Component/Footter'
import axios from 'axios';
import a from "../asset/food.png"
import { List, Select } from 'antd';
import Aos from 'aos';
import Layout1 from '../layout/Layout1';
import { useCart } from '../Context/CartProvider';

import { formatCurrency } from '../until/index';
const { Option } = Select;
function Food() {
  const { addToCart } = useCart();
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to fetch drink data
  const getFood = async () => {
    try {
      const response = await axios.get('https://api-mvc-sql-1.onrender.com/api/v1/food');
      setFood(response.data.data); // Assuming the structure of response.data contains 'data'
      console.log(response.data); // Optional: Log the entire response for debugging
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
   <Layout1>
        
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
                       {item.tenSp}
                    </h5>
                    
                  </div>
                  <div class="p-2 pt-0">
                    <p class="block text-black font-black font-sans text-base  leading-relaxed text-inherit antialiased">
                    Đơn Giá: {formatCurrency(item.giaSp)} 
                    </p>
                    <button onClick={() => handleAddToCart(item)} data-ripple-light="true" type="button" class="select-none rounded-lg  bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
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
          

        
    </Layout1>
  )
}

export default Food
