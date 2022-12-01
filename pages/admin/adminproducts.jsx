import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const adminproducts = ({ products }) => {
    const [pizzaList, setPizzaList] = useState(products)
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://restaurant-api-ndfc.onrender.com/api/prod/` + id)
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='p-[50px] flex relative'>

            <div className='flex flex-col flex-1'>
                <h1 className='font-bold text-lg mb-10'>Productos</h1>
                <table className='w-[100%] border-spacing-[20px] text-left'>
                    <tbody>
                        <tr>
                            <th >Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {pizzaList.map((product) => (
                        <tbody key={product._id}>
                            <tr>
                                <td><Image src={product.img} alt='' width={100} height={100} /></td>
                                <td>{product._id.slice(0, 5)}...</td>
                                <td>{product.title}</td>
                                <td>${product.prices[0]}</td>
                                <td>
                                    <button className='text-white border-none rounded-md p-1 mr-1 bg-teal-600 mx-[10px]'>Edit</button>
                                    <button className='text-white border-none rounded-md p-1 mr-1 bg-red-700' onClick={() => handleDelete(product._id)}>Delete</button>
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
    const productRes = await axios.get(`${process.env.SERVER_URL}/api/prod/`);

    return {
        props: {
            products: productRes.data
        }
    }
}

export default adminproducts

