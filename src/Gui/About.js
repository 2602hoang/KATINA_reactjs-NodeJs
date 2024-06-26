import React, { useEffect, useState } from 'react';

import Layout1 from '../layout/Layout1';
import axios from 'axios';
import { URL } from '../url/url';
import { Button, List, Modal } from 'antd';

import { formatCurrency, formattedTimestamp } from '../until/index';
import Listorder from '../Component/Listorder';
import ParentComponent from '../Component/ParentComponent';
function About() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const showModal = (id_order) => {
    setSelectedOrderId(id_order);
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    setSelectedOrderId(null);
  };

  const handleCancel = () => {
    setOpen(false);
    setSelectedOrderId(null);
  };

  // const toggleMenu = () => {
  //     setMenuVisible(!menuVisible);
  // };
  const getOrders = async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/oder/get/status/false`);
      // console.log("API Response:", response.data); 

      if (response.data.success) {
        setList(response.data.order);
        // console.log("ok", response.data);
      } else {
        // console.error('Error fetching orders:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching orders data:', error);
    }
  };

  const finishOrder = async () => {
    try {
      const response = await axios.put(`${URL}/api/v1/oder/finish/${selectedOrderId}`);
      if (response.data.success) {
        alert('Thanh toán thành công'); // Display success message
        window.location.reload(); // Reload the page after successful payment
      } else {
        console.error('Error finishing order:', response.data.message);
        alert('Lỗi thanh toán. Vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Error finishing order:', error);
      alert('Lỗi thanh toán. Vui lòng thử lại sau.');
    }
  };


  console.log("123", typeof (list));
  useEffect(() => {
    getOrders();
  }, []);
  const countItemsByIdSP = (id_SP, id_order) => {
    let count = 0;
    list.forEach(item => {
      if (item.id_SP === id_SP) {
        count++;
      }
    });
    return count;
  };

  const countItemsById = (id_food) => {
    let count = 0;
    list.forEach(item => {
      if (item.id_food === id_food) {
        count++;
      }
    });
    return count;
  };

  // console.log("234",list);

  function renderList(item, index) {
    // Check if this item is the first item with its id_order in the list
    // const isFirstItem = index === list.findIndex(cartItem => cartItem.id_order === item.id_order);




    return (

      <div className='flex justify-center items-center w-full h-auto my-5 ' key={item.id_item}>

        <div className="card">
          <div className="card-title">

            <button onClick={() => showModal(item.id_order)} class="relative overflow-hidden bg-gradient-to-r from-green-400 to-blue-500 text-white
             py-2 px-8 font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
              <span class="absolute top-0 left-0 w-full h-full bg-blue-300"></span>
              <span class="relative z-10">Chi tiết</span>
            </button>
            <br />
            Hóa đơn: ({item.id_order})<br />
            Thời gian:{formattedTimestamp(item.create_at)}
          </div>
          <div className="card-subtitle">
            {item.note ? `Ghi chú: ${item.note}` : 'Không có ghi chú'}

          </div>
          <hr className="card-divider" />
          <div className="card-footer">

            <div className="card-price">
              <span>



              </span>
              Tổng tiền :   {formatCurrency(item.total_amount)}
            </div>
          </div>
        </div>

      </div>


    );
  }
  


  return (
    <Layout1>
      <div className='min-h-screen h-auto w-full mt-[65px]'>
        <h1 className='text-center font-bold text-3xl my-4'>Đơn Hành chờ thanh toán</h1>
        <List
          grid={{ gutter: 0, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 4 }}
          dataSource={list}
          renderItem={renderList}
        />


        <Modal

          footer={<button
            onClick={() => {finishOrder(selectedOrderId);}}
            class="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
          >
            Thanh Toán
          </button>}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          title={<div className='flex row justify-center items-center space-x-4'>
            
            <h1 calssName='text-center justify-center items-center'>Chi tiết đơn hàng {selectedOrderId}</h1>

           

            <ParentComponent selectedOrderId={selectedOrderId}/>
          </div>}
          okButtonProps={{
            disabled: true,
            hidden: true,
          }}
          cancelButtonProps={{
            disabled: true,
            hidden: true,


          }}>
          <div className='h-[auto] justify-center items-center'>
            <Listorder selectedOrderId={selectedOrderId} />
          </div>
        </Modal>
      </div>

    </Layout1>
  );
}

export default About;
