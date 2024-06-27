import React, { useState } from 'react'
import logo from "../asset/logo.png"
import { Avatar, Badge, Button, FloatButton, Input, List, Modal, Tooltip } from 'antd';
import { CloseOutlined, DeleteFilled, IdcardFilled, MenuOutlined, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '../Context/CartProvider';
import axios from 'axios';
import TextArea from 'antd/es/input/TextArea';
import {URL} from '../url/url';
import {  useNavigate } from 'react-router-dom';
// import formatCurrency from '../Helper/formatCurrency';
function Header({ cart, formatCurrency }) {
    // const  cart  = useCart();
    const { removeFromCart, clearCart, addToCart } = useCart();
    const [menuVisible, setMenuVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const navigate = useNavigate();
    const [showTextAreaForItem, setShowTextAreaForItem] = useState(null);
    //     "orderItems": [
    //     {
    //       "id_food": 1,
    //       "id_SP":2,
    //       "qtyFood": 2,
    //       "qtySp":2
    //     },
    //     {
    //       "id_food": 1,
    //       "id_SP":2,
    //       "qtyFood": 2,
    //       "qtySp":2
    //     }
    //   ],
    //   "note": "Đơn hàng cho khách hàng VIP",
    //   "status": true,
    //   "order_date": "2024-06-20T15:00:00Z"
    
    const createOrders = async () => { 
        const orderItems = cart.map(item => ({
            id_food: item.id_food || null,
            id_SP: item.id_SP || null,
            qtyFood: item.id_food ? countItemsById(item.id_food)/countItemsById(item.id_food) : 0,
            qtySp: item.id_SP ? countItemsByIdSP(item.id_SP)/countItemsByIdSP(item.id_SP) : 0,
        })).filter(item => item.id_food !== null || item.id_SP !== null);
    
        const combinedNotes = notes;
    
        const orderData = {
            orderItems,
            note: combinedNotes,
            status: false,
            order_date: new Date().toISOString(),
        };
    
        try {
          
            const response = await axios.post(`${URL}/api/v1/oder`, orderData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Order created:', response.data);
            alert(`Order created successfully !` );
            clearCart();
           
            setOpen(false); // Close modal after successful order
            navigate('/about', {orderItems:orderItems}); 
        } catch (error) {
            console.error('Error creating order:', error.response ? error.response.data : error.message);
            alert('Error creating order. Please check the server logs for more details.');
        }
    };
    
   

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

    const countItemsByIdSP = (id_SP) => {
        let count = 0;
        cart.forEach(item => {
            if (item.id_SP === id_SP) {
                count++;
            }
        });
        return count;
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

    
    function renderItem(item, index) {
        const showName = index === cart.findIndex(cartItem => cartItem.id_SP === item.id_SP);
        const showName1 = index === cart.findIndex(cartItem => cartItem.id_food === item.id_food);
        return (
           
            <List.Item

                style={{ display: showName || showName1 ? 'block' : 'none' }}>
                <List.Item.Meta

                    avatar={<Avatar />}
                    title={
                        <div className=' flex justify-between items-start h-min-screen '>
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='text-red-700 font-mono font-bold '>Tên Món: {showName || showName1 ? item.tenSp : null}</h1>
                              
                                <div className='flex flex-row space-x-4 justify-start items-start mr-auto w-full '>
                                    {/* <Button onClick={() => { removeFromCart(item)}} icon={<MinusCircleFilled />} type='link' /> */}

                                    <button
                                        onClick={() => { removeFromCart(item) }}
                                        title="Add New"
                                        class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="30px"
                                            height="30px"
                                            viewBox="0 0 24 24"
                                            class="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200
                                          group-active:fill-green-600 group-active:duration-0 duration-300"
                                        >
                                            <path
                                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                stroke-width="1.5"
                                            />
                                            <path d="M8 12H16" stroke-width="1.5"></path>
                                        </svg>

                                    </button>

                                    {item.maSp ? <h1 className='border-b-2 text-black font-mono'>SL: {countItemsByIdSP(item.id_SP)}</h1>
                                        :

                                        <h1 className='border-b-2  font-mono text-black '>SL: {countItemsById(item.id_food)}</h1>}
                                    {/* <Button onClick={() => addToCart(item)} type='link' icon={<PlusCircleFilled />}></Button> */}
                                    <button
                                        onClick={() => addToCart(item)}
                                        title="Add New"
                                        class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30px"
                                            height="30px"
                                            viewBox="0 0 24 24"
                                            class="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200
                                             group-active:fill-green-600 group-active:duration-0 duration-300"
                                        >
                                            <path
                                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                                stroke-width="1.5"
                                            ></path>
                                            <path d="M8 12H16" stroke-width="1.5"></path>
                                            <path d="M12 16V8" stroke-width="1.5"></path>
                                        </svg>
                                    </button>

                                </div>

                            </div>
                            <div className='flex  flex-col space-y-9 justify-end items-end '>
                                <h1 className='text-black font-mono '>
                                    Đơn Giá : {formatCurrency(item.giaSp)}
                                </h1>
                                {/* <CloseOutlined /> */}
                                {item.maSp ? <h1 className='font-mono text-black mt-24'>TT: {formatCurrency(countItemsByIdSP(item.id_SP) * item.giaSp)}</h1> :
                                    <h1 className='font-mono text-black mt-24'>TT: {formatCurrency(countItemsById(item.id_food) * item.giaSp)}</h1>
                                }

                            </div>
                            
                        </div>
                    }
                    description={
                        <div className='flex justify-end items-end'>
                                   
                        </div>
                    }
                />

            </List.Item>
           
        );
    };

    return (
        <div className='overflow-hidden justify-start flex fixed   flex-row bg-[#fdc323] h-[60px] md:w-full z-50 w-full top-0 '>
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
                        <a href='/about' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Đơn Hàng Đã Đặt</a></li>
                    <li className='my-5 md:m-0'>
                        <a href='/contact' className=' md:text-white hover:border-b-2 hover:animate-ping hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>Liên Hệ</a></li>
                </ul>
                <Badge count={cart.length} className='absolute  top-5 right-16 cursor-pointer z-50'>
                    <ShoppingCartOutlined onClick={showModal} style={{ color: '#fff', fontSize: "30px" }} />
                </Badge>
                <div id='menu-button' className='absolute  top-5 right-5  md:hidden cursor-pointer z-50 flexd' onClick={toggleMenu}>


                    <MenuOutlined style={{ color: 'black', fontSize: "20px" }} />

                </div>

            </nav>
            <Modal title={<div className='flex  justify-center items-center gap-5 h-min-screen '>


                <ShoppingCartOutlined style={{ color: 'black', fontSize: "25px" }} /> Giỏ Hàng  
                </div>}
                className='justify-center items-center   text-center  h-screen '
                width={window.innerWidth >= 768 ? "670px" : "100%"}
                // height={window.innerWidth >= 768 ? "min" : "100%"}

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
                    className='  border-2 p-2 border-black border-dashed rounded-2xl h-auto w-[full] overflow-hidden h-min-screen'
                    header={<div className=' flex justify-start items-start hover:animate-bounce '>
                        <Tooltip title="Xóa giỏ hàng" trigger={"hover"}>
                            <DeleteFilled onClick={() => clearCart()} style={{ color: 'red', fontSize: "20px" }} />
                        </Tooltip>
                    </div>}
                    footer={


                        <div classsName='w-full flex-row  '>
                            {cart.length > 0 ?
                           <div className='md:w-2/3 justify-end items-end  ml-auto'>
                             <TextArea
                                    className='w-full justify-start items-start mr-5'
                                    placeholder="Ghi chú"
                                    autoSize={{
                                        minRows: 3,
                                        maxRows: 5,
                                    }}
                                    value={notes}
                                    onChange={notes => setNotes(notes.target.value)}
                                />
                            </div>:<></>}

                            <div className=' flex-col md:w-1/3 justify-end items-end ml-auto flex'>
                            {cart.reduce((total, item) => total + item.giaSp, 0) > 0 ? (
                                <h1 className='justify-end items-end text-black font-bold text-end'> Tổng tiền hóa đơn: {formatCurrency(cart.reduce((total, item) => total + item.giaSp, 0))}</h1>
                            ) : (
                                <h1></h1>
                            )}
                            { cart.length > 0 ? (
                               
                                <button
                                onClick={()=>{
                                    createOrders(); 
                                } }
                                class="flex animate-bounce mt-5 hover:animate-none items-center px-4 py-2 bg-gradient-to-r 
                                 from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full
                                  shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4"
                            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                                </svg>

                                Đặt hàng
                            </button>
                          
                                
                            ):
                            <h1></h1>}
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