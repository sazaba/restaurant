import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const PizzaCard = ({ pizza }) => {
    return (
        <div className='w-[100%] p-3 flex flex-col items-center justify-center px-[20px] py-[40px] cursor-pointer lg:w-[22%]'>
            <Link href={`/product/${pizza._id}`}>
                <Image src={pizza.img} alt='' width='500' height='500' />
            </Link>
            <h1 className='font-bold text-red-600 text-[30px] lg:text-lg '>{pizza.title}</h1>
            <span className='text-[24px] font-bold text-gray-600 lg:text-lg'>{pizza.prices[0]}</span>
            <p className='text-[24px] text-center f text-gray-500'>{pizza.desc}</p>
        </div>
    )
}

export default PizzaCard