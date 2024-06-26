import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../url/url';
import { formatCurrency } from '../until';

function Listorder({ selectedOrderId }) {
    const [order, setOrder] = useState([]);

    const getOrders = async () => {
        try {
            const response = await axios.get(`${URL}/api/v1/oder/get/status/false/${selectedOrderId}`);
            if (response.data.success) {
                setOrder(response.data.order);
            } else {
                console.error('Error fetching orders:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching orders data:', error);
        }
    };

    useEffect(() => {
        if (selectedOrderId) {
            getOrders();
        }
    }, [selectedOrderId]);

    const countItemsByIdSP = () => {
        const countMap = {};
        order.forEach(item => {
            if (item.id_SP) {
                if (countMap[item.id_SP]) {
                    countMap[item.id_SP].count++;
                } else {
                    countMap[item.id_SP] = {
                        count: 1,
                        name: item.tenD,
                        price: item.giaD,
                    };
                }
            }
        });
        return countMap;
    };

    const countItemsByIdF = () => {
        const countMap1 = {};
        order.forEach(item => {
            if (item.id_food) {
                if (countMap1[item.id_food]) {
                    countMap1[item.id_food].count++;
                } else {
                    countMap1[item.id_food] = {
                        count: 1,
                        name: item.tenF,
                        price: item.giaF,
                    };
                }
            }
        });
        return countMap1;
    };

    const itemCountsSP = countItemsByIdSP();
    const itemCountsF = countItemsByIdF();
    const idOrder = order.length > 0 ? order[0].id_order : null;
    const total = order.length > 0 ? order[0].total : null;
    const note = order.length > 0 ? order[0].note : null;
  console.log("123",itemCountsSP);
    return (
        <div id="pdf-content" className='w-full mt-auto flex justify-center items-center h-[auto]'>
            <div className='border border-gray-800 flex-row w-[380px] overflow-hidden 
             justify-center h-[auto] items-center p-1 m-4 bg-white '>
                {idOrder && <p className='text-black font-mono'>ID Order: {idOrder}</p>}
                {note && <p className='border-b-2 mb-2'>Ghi chú: {note}</p>}
                {Object.keys(itemCountsSP).length > 0 && <p className='text-black font-mono text-center'>Món nước</p>}
                {Object.keys(itemCountsSP).map((id, index) => (
                    
                    <div key={index} className="mb-2 text-black font-mono flex-row border-b-2 border-dashed">
                        <p>({index + 1}) Tên: {itemCountsSP[id].name}</p>
                        <p className='text-end'>SL: {itemCountsSP[id].count}</p>
                        <p className='text-start'>Giá: {formatCurrency(itemCountsSP[id].price)}</p>
                        <p className='text-end'>Thành tiền: {formatCurrency(itemCountsSP[id].price * itemCountsSP[id].count)}</p>
                    </div>
                ))}
             {Object.keys(itemCountsF).length > 0 && <p className='text-black font-mono text-center'>Món ăn</p>}
                {Object.keys(itemCountsF).map((id, index) => (
                    <div key={index} className="mb-2 text-black font-mono flex-row border-b-2">
                        <p> ({index+1})Tên: {itemCountsF[id].name}</p>
                        <p className='text-end'>SL: {itemCountsF[id].count}</p>
                        <p className='text-start'>Giá: {formatCurrency(itemCountsF[id].price)}</p>
                        <p className='text-end'>Thành tiền: {formatCurrency(itemCountsF[id].price * itemCountsF[id].count)}</p>
                    </div>
                ))}
                {total && <p className='text-end text-black font-mono'>Tổng tiền: {formatCurrency(total)}</p>}
            </div>
        </div>
    );
}

export default Listorder;
