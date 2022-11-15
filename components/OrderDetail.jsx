import { useRouter } from 'next/router'
import React, { useState } from 'react'

const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState('')
    const [address, setAddress] = useState('')
    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 })
    }
    return (
        <div className='w-[100%] h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-slate-400 z-20'>
            <div className='w-[500px] bg-white rounded-3xl p-14 flex flex-col items-center justify-center'>
                <h1 className='font-[300] text-md mb-5'>Completa esta informacion para llevar tu pedido</h1>
                <div className='flex flex-col w-[100%]'>
                    <label className='mb-3 font-bold'>Nombre</label>
                    <input className='h-[40px] outline-none' placeholder='Christian Acevedo...' type='text' onChange={(e) => setCustomer(e.target.value)} />
                    <label className='mb-3 mt-4 font-bold'>Numero de Mesa</label>
                    <input className='h-[40px] outline-none' placeholder='2...' type='number' onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button className='bg-red-600 text-white font-semibold px-3 py-1 rounded-md cursor-pointer mt-3' onClick={handleClick}>Ordenar</button>
            </div>
        </div>
    )
}


export default OrderDetail