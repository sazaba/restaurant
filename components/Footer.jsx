import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='max-h-screen bg-gray-900 flex overflow-hidden text-center'>
            <div className='basis-4/12 relative hidden lg:flex '>
                <Image src='/img/bg.png' alt='' width={700} height={480} objectFit='cover' />
            </div>
            <div className='lg:basis-4/6 basis-full relative lg:flex p-[50px] justify-between'>
                <div className='basis-4/12 p-[20px]'>
                    <h2 className='text-[25px] lg:text-4xl text-gray-50 font-bold'>OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA</h2>
                </div>
                <div className='basis-4/12 p-[20px] flex-col'>
                    <h1 className='text-lg text-yellow-400 font-bold'>FIND OUR RESTAURANTS</h1>
                    <br />
                    <p className='text-gray-100'>
                        1654 R. Don Road #304
                        <br /> New York, 85022
                        <br /> (602) 867-1010
                    </p>
                </div>
                <div className='basis-4/12 p-[20px]'>
                    <h1 className='text-lg text-yellow-400 font-bold'>WORKING HOURS</h1>
                    <br />
                    <p className='text-gray-100'>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <br />
                    <p className='text-gray-100'>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer