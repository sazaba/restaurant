// import axios from 'axios'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import React, { useState } from 'react'
// import AddButton from '../add'

// const index = ({ orders, products }) => {

//     const [pizzaList, setPizzaList] = useState(products)
//     const [orderList, setOrderList] = useState(orders)
//     const status = ['preparing', 'on the way', 'delivered']
//     const router = useRouter()


//     const handleDelete = async (id) => {
//         try {
//             const res = await axios.delete(`${process.env.SERVER_URL}/api/products/` + id)
//             setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))

//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const handleDeleteOrder = async (id) => {
//         try {
//             const res = await axios.delete(`${process.env.SERVER_URL}/api/orders/` + id)
//             setOrderList(orderList.filter((order) => order._id !== id))
//         } catch (error) {
//             console.log(error)

//         }
//     }

//     const handleStatus = async (id) => {
//         const item = orderList.filter(order => order._id === id)[0]
//         const currentStatus = item.status
//         router.reload(window.location.pathname)

//         try {
//             const res = await axios.put(`${process.env.SERVER_URL}/api/orders/` + id, { status: currentStatus + 1 })
//             setOrderList([
//                 res.data,
//                 ...orderList.filer((order) => order._id !== id)
//             ])

//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return (
//         <div className='p-[50px] flex relative'>
//             <Link href='/add'>
//                 <button className='absolute top-0 left-0 bg-red-600 rounded-md px-2 py-1 m-4 text-white font-medium cursor-pointer'>Add New Pizza</button>
//             </Link>
//             <div className='flex-1'>
//                 <h1>Productos</h1>
//                 <table className='w-[100%] border-spacing-[20px] text-left'>
//                     <tbody>
//                         <tr>
//                             <th>Image</th>
//                             <th>Id</th>
//                             <th>Title</th>
//                             <th>Price</th>
//                             <th>Action</th>
//                         </tr>
//                     </tbody>
//                     {pizzaList.map((product) => (
//                         <tbody key={product._id}>
//                             <tr>
//                                 <td><Image src={product.img} alt='' width={100} height={100} /></td>
//                                 <td>{product._id.slice(0, 5)}...</td>
//                                 <td>{product.title}</td>
//                                 <td>${product.prices[0]}</td>
//                                 <td>
//                                     <button className='text-white border-none bg-teal-600 mx-[10px]'>Edit</button>
//                                     <button className='text-white border-none bg-red-700' onClick={() => handleDelete(product._id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     ))}
//                 </table>
//             </div>


//             <div className='flex-1'>
//                 <h1>Ordenes</h1>
//                 <table className='w-[100%] border-spacing-[20px] text-left'>
//                     <tbody>
//                         <tr>
//                             <th>Id</th>
//                             <th>Customer</th>
//                             <th>Total</th>
//                             <th>Payment</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </tbody>
//                     {orderList.map((order) => (
//                         <tbody key={order._id}>
//                             <tr>
//                                 <td>{order._id.slice(0, 5)}...</td>
//                                 <td>{order.customer}</td>
//                                 <td>${order.total}</td>
//                                 <td>{order.method === 0 ? <span>Pago en Efectivo</span> : <span>Pagado</span>}</td>
//                                 <td>{status[order.status]}</td>
//                                 <td>
//                                     <button className='text-white border-none bg-teal-600 px-[10px]' onClick={() => handleStatus(order._id)}>Next stage</button>
//                                     <button className='text-white border-none bg-red-700' onClick={() => handleDeleteOrder(order._id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     ))}
//                 </table>
//             </div>

//         </div>
//     )
// }

// export const getServerSideProps = async () => {
//     const productRes = await axios.get(`${process.env.SERVER_URL}/api/products/`);
//     const orderRes = await axios.get(`${process.env.SERVER_URL}/api/orders/`);
//     return {
//         props: {
//             orders: orderRes.data,
//             products: productRes.data
//         }
//     }
// }
// export default index