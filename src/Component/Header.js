import React, { useState } from 'react'
import logo from "../asset/logo.png"
import { Badge, FloatButton, Modal } from 'antd';
import { IdcardFilled, MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
function Header({ cart }) {
    const [menuVisible, setMenuVisible] = useState(false);
    // const [cartVisible, setCartVisible] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    console.log(cart);
    const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <div className='overflow-hidden justify-start flex fixed   flex-row bg-[#00785d] h-[60px] md:w-full z-50 w-full top-0 '>
            <nav className='overflow-hidden justify-between items-center py-3 flex '>
            <div className='md:flex top-0 left-0  z-50  md:z-50  w-52 md:w-72 flex flex-row md:ml-10   '>
                    <a href='/' className='font-black flex  items-center gap-x-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    <img src={logo} className=' space-x-1 h-12 w-16 rounded-full' />
                   Katina
                </a>
            </div>
           
                <ul id="menu" className={`
                py-4
                md:ml-96
            flexd
            md:space-y-0
               bg-sky-300
                fixed z-20 top-0 left-0 w-full h-full flex font-bold flex-col justify-center items-center  ${menuVisible ? 'min-h-full' : 'invisible'
                        } md:visible md:bg-transparent md:h-auto md:flex-row md:justify-between md:static
                    }`}>
                    <li className='my-5 md:m-0'>
                        <a href='/' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Trang Chủ</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/drink' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Nước Uống</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/food' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Món Ăn</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/about' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Về Chúng Tôi</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/contact' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Liên Hệ</a></li>
                </ul>
                <Badge count={ 4} className='absolute  top-5 right-16 cursor-pointer z-50'>
                <ShoppingCartOutlined onClick={showModal}  style={{ color: '#fff',fontSize:"30px" }} />
                </Badge>
                <div id='menu-button' className='absolute  top-5 right-5  md:hidden cursor-pointer z-50 flexd' onClick={toggleMenu}>

                 
                    <MenuOutlined style={{ color: 'black',fontSize:"20px" }} /> 

                </div>

            </nav>
            <Modal title={<div className='flex justify-center items-center gap-4'>
        <ShoppingCartOutlined style={{ color: 'black', fontSize: "25px" }} /> gio hang  </div>}
        className='sticky overflow-hidden text-center  h-max  '
        width={window.innerWidth >= 768 ? "80%" : "100%"}

        open={open}
        onOk={handleOk}
        onCancel={handleCancel}

        okButtonProps={{
          disabled: true,
          hidden: true,
        }}
        cancelButtonProps={{
          disabled: true,
          hidden: true,
        }}>
            </Modal>
           

        </div>
    )
}

export default Header