import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AddButton from '../add'

const index = ({ orders, products }) => {

    const [pizzaList, setPizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)
    const status = ['preparing', 'on the way', 'delivered']
    const router = useRouter()



    const handleDeleteOrder = async (id) => {
        try {
            const res = await axios.delete(`http://restaurant-api-ndfc.onrender.com/api/orderid/` + id)
            setOrderList(orderList.filter((order) => order._id !== id))
        } catch (error) {
            console.log(error)

        }
    }

    const handleStatus = async (id) => {
        const item = orderList.filter(order => order._id === id)[0]
        const currentStatus = item.status
        router.reload(window.location.pathname)

        try {
            const res = await axios.put(`http://restaurant-api-ndfc.onrender.com/api/orderid/` + id, { status: currentStatus + 1 })
            setOrderList([
                res.data,
                ...orderList.filer((order) => order._id !== id)
            ])

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='w-[100%] p-[50px] flex relative'>
            <div className='flex flex-col flex-1'>
                <h1 className='font-bold text-lg mb-10'>Ordenes</h1>
                <table className='w-[100%] border-spacing-[20px] text-left'>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orderList.map((order) => (
                        <tbody key={order._id}>
                            <tr>
                                <td>{order._id.slice(0, 5)}...</td>
                                <td>{order.customer}</td>
                                <td>${order.total}</td>
                                <td>{order.method === 0 ? <span>Pago en Efectivo</span> : <span>Pagado</span>}</td>
                                <td>{status[order.status]}</td>
                                <td>
                                    <button className='text-white border-none rounded-md p-1 mr-1  bg-teal-600 px-[10px]' onClick={() => handleStatus(order._id)}>Next stage</button>
                                    <button className='text-white border-none rounded-md p-1 mr-1  bg-red-700' onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

        </div>
    )
}

export const getServerSideProps = async () => {

    const orderRes = await axios.get(`${process.env.SERVER_URL}/api/order/`);
    return {
        props: {
            orders: orderRes.data,

        }
    }
}
export default index