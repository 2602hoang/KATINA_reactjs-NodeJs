import React, { useState } from 'react'
import logo from "../asset/logo.png"
import { Avatar, Badge, Button, FloatButton, List, Modal } from 'antd';
import { CloseOutlined, DeleteFilled, IdcardFilled, MenuOutlined, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../Context/CartProvider';
// import formatCurrency from '../Helper/formatCurrency';
function Header({cart,formatCurrency}) {
    // const  cart  = useCart();
    const {  removeFromCart,clearCart,addToCart } = useCart();
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
    // const removeFromCartID = (id_SP) => {
    //     const newCart = cart.filter(item => item.id_SP !== id_SP);
    //     setCart(newCart); // Assuming you have a setCart function in your CartProvider
    // };
    
    const countItemsByIdSP = (id_SP) => {
        let count = 0;
        cart.forEach(item => {
            if (item.id_SP === id_SP) {
                count++;
            }
        });
        return count;
    };
    const removeItemByName = (name) => {
        const itemIndex = cart.findIndex(item => item.tenSp === name);
        if (itemIndex !== -1) {
            const itemToRemove = cart[itemIndex];
            removeFromCart(itemToRemove);
        }
    };
    const countItemsById = (id_food) => {
        let count = 0;
        cart.forEach(item => {
            if (item.id_food === id_food) {
                count++;
            }
        });
        return count;
    };
    
    function renderItem (item, index) {
        // Kiểm tra xem sản phẩm này có được hiển thị tên hay không
        const showName = index === cart.findIndex(cartItem => cartItem.id_SP === item.id_SP);
       
        
        // const showTongtien = index === cart.findIndex(cartItem => cartItem.id_food === item.id_food);
        const showName1 = index === cart.findIndex(cartItem => cartItem.id_food === item.id_food);
        // console.log("1",showName1);
        // console.log("0",showName);
        return (
            
            <List.Item
            
            style={{ display: showName || showName1 ? 'block' : 'none' }}>
                <List.Item.Meta
               
                    avatar={<Avatar/>}
                    title={
                        <div className=' flex justify-between items-start'>
                            <div className='flex flex-col justify-start items-start'>
                            <h1>Tên Món: {showName || showName1 ? item.tenSp : null}</h1>
                            
                            </div>
                            <div className='flex  flex-col space-y-5 justify-end items-end'>
                            <h1 className=''>
                                Đơn Giá : {formatCurrency(item.giaSp)}
                            </h1>
                            <CloseOutlined />
                            <div className='flex flex-row space-x-4'>
                            <Button onClick={() =>{ 
                                // console.log("2121",index);
                                removeFromCart(item)
                               
                                   
                               }} icon={<MinusCircleFilled/>}  type='text' />
                             { item.maSp?   <h1 className='border-b-2'>SL: {countItemsByIdSP(item.id_SP)}</h1>
                             :
                         
                            <h1 className='border-b-2'>SL: {countItemsById(item.id_food)}</h1>}
                            <Button onClick={() => addToCart(item)} type='text' icon={<PlusCircleFilled/>}></Button>
                           
                            </div>
                            {item.maSp?<h1 className='mt-5 '>TT: {formatCurrency(countItemsByIdSP(item.id_SP) * item.giaSp)}</h1>:
                            <h1>TT: {formatCurrency(countItemsById(item.id_food) * item.giaSp)}</h1>
                            }
                            
                            </div>
                             {/* <h1>Tên Món:{showName1 ? item.id_food : null}</h1> */}
                        </div>
                        }
                    description={
                        <div className='flex justify-end items-end'>
                            
                            {/* <h1>Tổng tiền hóa đơn: {formatCurrency(cart.reduce((total, item) => total + item.giaSp, 0))}</h1> */}
                            
                        </div>
                    }
                />
                
            </List.Item>
          
        );
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
                <Badge count={ cart.length} className='absolute  top-5 right-16 cursor-pointer z-50'>
                <ShoppingCartOutlined onClick={showModal}  style={{ color: '#fff',fontSize:"30px" }} />
                </Badge>
                <div id='menu-button' className='absolute  top-5 right-5  md:hidden cursor-pointer z-50 flexd' onClick={toggleMenu}>

                 
                    <MenuOutlined style={{ color: 'black',fontSize:"20px" }} /> 

                </div>

            </nav>
            <Modal title={<div className='flex justify-center items-center gap-4'>
                 

        <ShoppingCartOutlined style={{ color: 'black', fontSize: "25px" }} /> gio hang  </div>}
        className='justify-center items-center overflow-hidden text-center  h-screen '
        width={window.innerWidth >= 768 ? "50%" : "100%"}

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


                <List
                 className=' overflow-y-scroll  h-[90vh] '
                header={<div className=' flex justify-start items-start  '> <DeleteFilled onClick={() => clearCart()} style={{color:'red',fontSize:"20px"}}/></div>}
                footer={
              
                <div className='flex flex-col justify-end items-end'>
                    <div classsName=' flex items-end justify-end'>
                    <h1 >Tổng tiền hóa đơn: {formatCurrency(cart.reduce((total, item) => total + item.giaSp, 0))}</h1>
                    </div>
                  
                   
                 
                 
                  </div>   
                }
            //   itemLayout="horizontal"
            //   dataSource={cart}
              itemLayout="horizontal"
              dataSource={cart}
              renderItem={renderItem}
           
           />

            </Modal>

          

        </div>
    )
}

export default Header