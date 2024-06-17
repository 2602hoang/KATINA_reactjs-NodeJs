import React, { useState } from 'react'
import logo from "../asset/logo.png"
import { FloatButton } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <div className='overflow-hidden justify-start flex fixed   flex-row bg-yellow-200 h-[60px] md:w-full z-50 w-full top-0 '>
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
                        <a href='/' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Nước Uống</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Món Ăn</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Về Chúng Tôi</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Liên Hệ</a></li>
                </ul>
                
                <div id='menu-button' className='absolute  top-5 right-5  md:hidden cursor-pointer z-50 flexd' onClick={toggleMenu}>

                 
                    <MenuOutlined style={{ color: 'black',fontSize:"20px" }} /> 

                </div>

            </nav>
        </div>
    )
}

export default Header