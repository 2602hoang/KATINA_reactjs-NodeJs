import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Footter from '../Component/Footter';
import axios from 'axios';
import { Card, List, Select,Input } from 'antd';
import debounce from 'lodash/debounce';
// Function to format currency
function formatCurrency(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}


const { Option } = Select;

function Drink() {
  const [drink, setDrink] = useState([]);
  const [filteredDrink, setFilteredDrink] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to fetch drink data
  const getDrink = async () => {
    try {
      const response = await axios.get('http://localhost/PHP/api/api_v1/getSanpham.php');
      setDrink(response.data.data); // Assuming the structure of response.data contains 'data'
      console.log(response.data); // Optional: Log the entire response for debugging
    } catch (error) {
      console.error('Error fetching drink data:', error);
    }
  };

  // Function to extract unique categories from drink data
  const extractCategories = () => {
    const uniqueCategories = [...new Set(drink.map(item => item.tenLoai))];
    setCategories(uniqueCategories);
  };

  // Function to filter drink based on selected category
  const filterDrink = (category) => {
    if (category === '') {
      setFilteredDrink(drink);
    } else {
      const filtered = drink.filter(item => item.tenLoai === category);
      setFilteredDrink(filtered);
    }
    setSelectedCategory(category);
  };

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    getDrink();
  }, []); // Empty dependency array ensures it runs only once on mount

  // useEffect hook to extract categories after drink state is updated
  useEffect(() => {
    extractCategories();
  }, [drink]); // Run whenever drink state changes

  // useEffect hook to initially set filtered drink to all products
  useEffect(() => {
    setFilteredDrink(drink);
  }, [drink]); // Run whenever drink state changes

  return (
    <div style={{ backgroundColor: "#cfe887" }} className='overflow-hidden h-auto w-full flex flex-col justify-center items-center'>
      <Header />
      <div className='min-h-screen h-auto w-full flex flex-col mt-[65px] text-center'>
        <h1>Trà Sữa nhà làm</h1>

        {/* Category filter dropdown */}
        <div className='flex justify-center items-center'>
     
        {/* Category filter dropdown */}
        <Select
          style={{ width: 200, marginBottom: 16 }}
          placeholder="Chọn loại sản phẩm"
          onChange={filterDrink}
          value={selectedCategory}
        >
          <Option value="">Tất cả</Option>
          {categories.map((category, index) => (
            <Option key={index} value={category}>{category}</Option>
          ))}
        </Select>
        </div>
        {/* Render filtered products */}
        <div className='flex w-full px-5 justify-center items-center'>
          <List
            grid={{
              gutter: 80,
              xs: 2,  // 1 column on screens smaller than 576px
              sm: 3,  // 2 columns on screens equal to or greater than 576px
              md: 4,  // 4 columns on screens equal to or greater than 768px
              lg: 4,  // 4 columns on screens equal to or greater than 992px
              xl: 4,  // 4 columns on screens equal to or greater than 1200px
              xxl: 4, // 4 columns on screens equal to or greater than 1600px

            }}
            className='w-full'
            dataSource={filteredDrink}
            renderItem={(item) => (
              <List.Item className='h-96'>
                <div className='flex justify-center items-center w-auto h-auto'>
                <div class="relative flex w-80   mt-[25px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div class="relative mx-4 -mt-6 h-40  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg 
  shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  </div>
                  <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {formatCurrency(item.giaSp)}
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {item.tenSp}
                    </p>
                  </div>
                  <div class="p-6 pt-0">
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
      <Footter />
    </div>
  );
}

export default Drink;
