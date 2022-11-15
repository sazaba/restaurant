import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Order.module.css'

const Order = () => {
    const status = 0

    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.inProgress
        if (index - status > 1) return styles.undone
    }
    return (
        <div className='flex p-[50px]'>
            <div className='basis-4/6'>
                <div className='basis-1/2'>
                    <table className='w-[100%] border-spacing-5'>
                        <tbody>
                            <tr className='flex justify-around items-center mb-2'>
                                <th className='w-1/4'>Order Id</th>
                                <th className='w-1/4'>Customer</th>
                                <th className='w-1/4'>Adress</th>
                                <th className='w-1/4'>Total</th>
                            </tr>
                            <tr className='flex justify-around items-center'>
                                <td className='w-1/4 '>
                                    <div className='flex justify-center'>
                                        <span className='text-red-600 font-bold'>12</span>
                                    </div>

                                </td>
                                <td className='w-1/4'>
                                    <div className='flex justify-center'>
                                        <span className='text-center'>Santiago Zappa</span>
                                    </div>
                                </td>
                                <td className='w-1/4'>
                                    <div className='flex justify-center'>
                                        <span>Elton st. 212 LA</span>
                                    </div>
                                </td>
                                <td className='w-1/4'>
                                    <div className='flex justify-center'>
                                        <span className='font-bold '>$39.80</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-around items-center basis-1/2 mt-10'>
                    <div className={statusClass(0)}>
                        <Image src='/img/paid.png' alt='' width={50} height={50} />
                        <span>Payment</span>
                        <div>
                            <Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={50} height={50} />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src='/img/bake.png' alt='' width={50} height={50} />
                        <span>Preparing</span>
                        <div>
                            <Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={50} height={50} />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src='/img/bike.png' alt='' width={50} height={50} />
                        <span>On the Way</span>
                        <div>
                            <Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={50} height={50} />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src='/img/delivered.png' alt='' width={50} height={50} />
                        <span>Delivered</span>
                        <div>
                            <Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={50} height={50} />
                        </div>
                    </div>
                </div>

            </div>


            <div className='basis-2/6 flex flex-col items-center justify-center gap-4'>
                <h2 className='text-3xl font-bold'>TOTAL CART</h2>
                <div>
                    <b>Total:</b> $79.60
                </div>
                <button className='bg-lime-500 text-white font-semibold px-3 py-1 rounded-md cursor-not-allowed disabled'>Already Paid</button>

            </div>
        </div>
    )
}

export default Order