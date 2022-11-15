// import Image from 'next/image'
// import React from 'react'

// const Featured = () => {
//     const images = [
//         "/img/flyer.jpg",
//         "/img/flyer.jpg",
//         "/img/flyer.jpg",

//     ]
//     return (
//         <div className='min-h-screen bg-red-600 overflow-hidden'>
//             <div className='absolute top-0 bottom-0 left-0 m-auto w-[10%] h-[20%] cursor-pointer'>
//                 <Image src='/img/arrowl.png' alt='' width='100' height='50' />
//             </div>

//             <div className='flex w-[100%]'>
//                 {images.map((img, i) => (
//                     <div className='w-[100%] h-[20%] mx-[10%]' key={i}>
//                         <Image className='w-[100%]' src={img} alt='' width={1000} height={500} objectFit='contain' />
//                     </div>
//                 ))}

//             </div>
//             <div className='absolute top-0 bottom-0 right-0 m-auto w-[10%] h-[20%] cursor-pointer'>
//                 <Image src='/img/arrowr.png' alt='' width='100' height='50' />
//             </div>
//         </div>
//     )
// }

// export default Featured