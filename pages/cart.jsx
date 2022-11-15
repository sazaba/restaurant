import Image from 'next/image'
import React from 'react'

const cart = () => {
    return (
        <div className='p-[50px] flex w-[100%]'>
            <div className='basis-4/6'>
                <table className='w-[100%] border-spacing-5'>
                    <tbody>
                        <tr className='flex justify-around items-center mb-2'>
                            <th className='w-1/6'>Product</th>
                            <th className='w-1/6'>Name</th>
                            <th className='w-1/6'>Extras</th>
                            <th className='w-1/6'>Price</th>
                            <th className='w-1/6'>Quantity</th>
                            <th className='w-1/6'>Total</th>
                        </tr>
                        <tr className='flex justify-around items-center'>
                            <td className='w-1/6'>
                                <div className='flex justify-center'>
                                    <Image src='/img/pizza.png' alt='' width={100} height={100} />
                                </div>
                            </td>
                            <td className='w-1/6 '>
                                <div className='flex justify-center'>
                                    <span className='text-red-600 font-bold'>CORALZO</span>
                                </div>

                            </td>
                            <td className='w-1/6'>
                                <div className='flex justify-center'>
                                    <span className='text-center'>Double ingredient, spicy sauce</span>
                                </div>
                            </td>
                            <td className='w-1/6'>
                                <div className='flex justify-center'>
                                    <span>$19.90</span>
                                </div>
                            </td>
                            <td className='w-1/6'>
                                <div className='flex justify-center'>
                                    <span>2</span>
                                </div>
                            </td>
                            <td className='w-1/6'>
                                <div className='flex justify-center'>
                                    <span className='font-bold '>$39.80</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='basis-2/6 flex flex-col items-center justify-center gap-4'>

                <h2 className='text-3xl font-bold'>TOTAL CART</h2>
                <div>
                    <b>Total:</b> $79.60
                </div>
                <button className='bg-red-600 text-white font-semibold px-3 py-1 rounded-md cursor-pointer'>Checkout Now</button>

            </div>

        </div>
    )
}

export default cart