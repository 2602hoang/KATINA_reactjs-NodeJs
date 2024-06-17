import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Footter from '../Component/Footter';
import axios from 'axios';
import { Card, List, Select } from 'antd';

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
  const [searchQuery, setSearchQuery] = useState('');
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
  const filterDrink = () => {
    let filtered = drink;

    // Filter by category
    if (selectedCategory !== '') {
      filtered = filtered.filter(item => item.tenLoai === selectedCategory);
    }

    // Filter by search query (case insensitive)
    if (searchQuery !== '') {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.tenSp.toLowerCase().includes(normalizedQuery)
      );
    }

    setFilteredDrink(filtered);
  };

  // Function to extract unique categories from drink data
  const extractCategories = () => {
    const uniqueCategories = [...new Set(drink.map(item => item.tenLoai))];
    setCategories(uniqueCategories);
  };

  // Function to filter drink based on selected category
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    filterDrink();
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
        <Select
          style={{ width: 200, marginBottom: 16 }}
          showSearch
          onSearch={handleSearchChange}
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
        <List
          grid={{ gutter: 80, column: 4 }}
          dataSource={filteredDrink}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.tenSp}>
                <img src={item.hinh} alt={item.tenSp} /> {/* Ensure to provide alt text for accessibility */}
                {formatCurrency(item.giaSp)} {/* Pass item.giaSp directly */}
              </Card>
            </List.Item>
          )}
        />
      </div>
      <Footter />
    </div>
  );
}

export default Drink;
