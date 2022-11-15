import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const PizzaCard = ({ pizza }) => {
    return (
        <div className='w-[22%] p-3 flex flex-col items-center justify-center px-[20px] py-[40px] cursor-pointer'>
            <Link href={`/product/${pizza._id}`}>
                <Image src={pizza.img} alt='' width='500' height='500' />
            </Link>
            <h1 className='text-lg font-bold text-red-600'>{pizza.title}</h1>
            <span className='text-lg font-bold text-gray-600'>{pizza.prices[0]}</span>
            <p className='text-center f text-gray-500'>{pizza.desc}</p>
        </div>
    )
}

export default PizzaCard