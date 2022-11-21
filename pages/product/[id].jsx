import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ({ pizza }) => {
    const [price, setPrice] = useState(pizza.prices[0])
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleSize = (sizeIndex) => {
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex)
        changePrice(difference)

    }

    const handleChange = (e, option) => {
        const checked = e.target.checked
        if (checked) {
            changePrice(option.price)
            setExtras(prev => [...prev, option])
        } else {
            changePrice(-option.price)
            setExtras(extras.filter(extra => extra.id !== option._id))
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...pizza, extras, price, quantity }))

    }

    return (
        <div className='min-h-screen lg:flex lg:flex-row flex flex-col justify-center'>
            <div className='basis-2/4 h-[100%] flex items-center justify-center p-[20px]'>
                <div className='w-[80%] h-[80%] relative'>
                    <Image src={pizza.img} width={500} height={500} alt='' objectFit='contain' />
                </div>
            </div>

            <div className='basis-2/4 p-[20px] justify-center text-center lg:text-left'>
                <h1 className='font-bold text-4xl my-4'>{pizza.title}</h1>
                <span className='text-red-600 text-2xl font-[400] '>${price}</span>
                <p className='my-[20px]'>{pizza.desc}</p>
                <h3 className='font-bold text-xl my-4 text-center lg:text-left'>Choose The Size</h3>
                <div className='flex justify-evenly w-[100%] cursor-pointer lg:w-[40%] lg:justify-between'>
                    <div onClick={() => handleSize(0)} className='w-[30px] h-[30px] relative'>
                        <Image src='/img/size.png' alt='' width={200} height={200} />
                        <span className='absolute top-[-5px] right-[-20px] bg-teal-600 text-white text-[12px] px-[5px] rounded-md'>Small</span>
                    </div>
                    <div onClick={() => handleSize(1)} className='w-[40px] h-[40px] relative'>
                        <Image src='/img/size.png' alt='' width={200} height={200} />
                        <span className='absolute top-[-5px] right-[-20px] bg-teal-600 text-white text-[12px] px-[5px] rounded-md'>Medium</span>
                    </div>
                    <div onClick={() => handleSize(2)} className='w-[50px] h-[50px] relative'>
                        <Image src='/img/size.png' alt='' width={200} height={200} />
                        <span className='absolute top-[-5px] right-[-20px] bg-teal-600 text-white text-[12px] px-[5px] rounded-md'>Large</span>
                    </div>
                </div>
                <h3 className='font-bold text-xl my-4 text-center lg:text-left'>Choose Aditional Ingredients</h3>
                <div className='flex flex-col items-center mb-[30px ] gap-3 lg:flex lg:flex-row'>
                    {pizza.extraOptions.map((option) => (

                        <div className=' flex items-center mr-[10px] text-[14px] font-[500]' key={option._id}>
                            <input
                                className='w-[20px] h-[20px] mr-1'
                                type='checkbox'
                                id={option.text}
                                name={option.text}
                                onChange={(e) => handleChange(e, option)} />
                            <label htmlFor='double'>{option.text}</label>
                        </div>

                    ))}
                </div>

                <div className='my-4'>
                    <input onChange={(e) => setQuantity(e.target.value)} className='w-[50px] h-[30px] border border-1 border-gray-500 text-center' type='number' defaultValue={1} />
                    <button className='h-[30px] px-2 ml-3 bg-red-600 text-white border-none cursor-pointer font-[500]' onClick={handleClick}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://restaurant-delta-roan.vercel.app/api/products/${params.id}`);
    return {
        props: {
            pizza: res.data
        }
    }
}

export default Product