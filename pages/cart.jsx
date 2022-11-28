import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';
import OrderDetail from '../components/OrderDetail';


const cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.products)
    const total = useSelector((state) => state.total)
    const router = useRouter()
    const [cash, setCash] = useState(false)

    const createOrder = async (data) => {
        try {
            const res = await axios.post(`${process.env.SERVER_URL}/api/order`, data);
            res.status === 201 && router.push('/orders/' + res.data._id);
            dispatch(reset())

        } catch (error) {
            console.log(error)

        }

    }
    return (
        <div className='p-[50px] flex flex-col lg:flex w-[100%]'>
            <div className='basis-4/6'>
                <table className='w-[100%] border-spacing-5'>
                    <tbody>
                        <tr className='lg:flex hidden flex-col justify-center lg:flex-row lg:justify-around items-center mb-2'>
                            <th className='w-1/6'>Product</th>
                            <th className='w-1/6'>Name</th>
                            <th className='w-1/6'>Extras</th>
                            <th className='w-1/6'>Price</th>
                            <th className='w-1/6'>Quantity</th>
                            <th className='w-1/6'>Total</th>
                        </tr>
                        {cart.map((product) => (
                            <tr className='flex justify-around items-center' key={product._id}>
                                <td className='w-1/6'>
                                    <div className='flex justify-center'>
                                        <Image src={product.img} alt='' width={100} height={100} />
                                    </div>
                                </td>
                                <td className='w-1/6 '>
                                    <div className='flex justify-center'>
                                        <span className='text-red-600 font-bold'>{product.title}</span>
                                    </div>

                                </td>
                                <td className='w-1/6'>
                                    <div className='flex justify-center'>
                                        <span className='text-center'>
                                            {product.extras.map((extra) => (
                                                <span key={extra.id}>{extra.text}, </span>
                                            ))}
                                        </span>
                                    </div>
                                </td>
                                <td className='w-1/6'>
                                    <div className='flex justify-center'>
                                        <span>${product.price}</span>
                                    </div>
                                </td>
                                <td className='w-1/6'>
                                    <div className='flex justify-center'>
                                        <span>{product.quantity}</span>
                                    </div>
                                </td>
                                <td className='w-1/6'>
                                    <div className='flex justify-center'>
                                        <span className='font-bold '>${product.price * product.quantity}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='basis-2/6 flex flex-col items-center justify-center gap-4'>

                <h2 className='text-3xl font-bold'>TOTAL CART</h2>
                <div>
                    <b>Total:</b> ${total}
                </div>

                <button className='bg-red-600 text-white font-semibold px-3 py-1 rounded-md cursor-pointer' onClick={() => setCash(true)}
                >Checkout Now</button>
            </div>
            {cash && <OrderDetail total={total} createOrder={createOrder} />}
        </div >
    )
}

export default cart