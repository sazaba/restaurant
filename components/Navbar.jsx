import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='z-10 h-[100%] bg-red-600 py-[15px] px-[50px] flex items-center justify-between sticky top-0'>
            <div className='bg-white rounded-[50%] p-[10px] w-[50px] h-[50px]'>
                <Image width='32' height='32' src='/img/telephone.png' alt='' />
            </div>
            <div className='mr-[20px] text-white'>
                <div className='text-[12px] font-[500] '>ORDER NOW!</div>
                <div className='text-[20px] font-bold'>012 345 678</div>
            </div>
            <div className=' basis-1/2'>
                <ul className='flex text-white items-center p-0 '>
                    <li className='m-[20px] font-[500]'>Homepage</li>
                    <li className='m-[20px] font-[500]'>Products</li>
                    <li className='m-[20px] font-[500]'>Menu</li>
                    <Image src='/img/logo.png' alt='' width='160' height='69' />
                    <li className='m-[20px] font-[500]'>Events</li>
                    <li className='m-[20px] font-[500]'>Blog</li>
                    <li className='m-[20px] font-[500]'>Contact</li>
                </ul>
            </div>
            <div className='flex justify-end items-center basis-1/4'>
                <div className='relative'>
                    <Image src='/img/cart.png' alt='' width='30' height='30' />
                    <div className='absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-[50%] bg-white p-[3px] flex items-center justify-center font-bold text-red-600'>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar