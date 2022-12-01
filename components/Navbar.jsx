import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const quantity = useSelector(state => state.quantity)
    return (
        <div className='z-10 h-[100%] bg-red-600 py-[15px] px-[50px] flex items-center justify-between sticky top-0'>
            <div className='bg-white rounded-[50%] p-[10px] w-[50px] h-[50px]'>
                <Image width='32' height='32' src='/img/telephone.png' alt='' />
            </div>
            <div className='mr-[20px] text-white'>
                <div className='text-[12px] font-[500] cursor-pointer '>ORDER NOW!</div>
                <div className='text-[20px] font-bold cursor-pointer'>012 345 678</div>
            </div>
            <div className=' basis-1/2 hidden lg:flex'>
                <ul className='flex text-white items-center p-0 '>
                    <Link href='/'>
                        <li className='m-[20px] font-[500] cursor-pointer'>Homepage</li>
                    </Link>
                    <Link href='/admin'>
                        <li className='m-[20px] font-[500] cursor-pointer'>Orders</li>
                    </Link>
                    <Link href='/'>
                        <li className='m-[20px] font-[500] cursor-pointer'>Menu</li>
                    </Link>
                    <Link style={{ width: '80px' }} href='/'>
                        <Image src='/img/logo.png' alt='' width='250' height='250' />
                    </Link>
                    <li className='m-[20px] font-[500] cursor-pointer'>Events</li>
                    <li className='m-[20px] font-[500] cursor-pointer'>Blog</li>
                    <li className='m-[20px] font-[500] cursor-pointer'>Contact</li>
                </ul>
            </div>
            <Link href='/cart'>
                <div className='flex justify-end items-center basis-1/4'>
                    <div className='relative'>
                        <Image src='/img/cart.png' alt='' width='30' height='30' />
                        <div className='absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-[50%] bg-white p-[3px] flex items-center justify-center font-bold text-red-600'>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar