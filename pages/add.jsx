import React, { useState } from 'react'

const add = () => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState(null)
    const [extra, setExtra] = useState(null)
    const [extraOptions, setExtraOptions] = useState([])

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value })
    }
    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra])
    }
    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices)
    }
    const handleCreate = async () => {

        try {

        } catch (error) {

        }
    }
    return (
        <div className='flex flex-col items-center justify-center p-4 m-4 gap-2 ' >
            <h1 className='font-bold m-4 text-4xl text-gray-800'>Add a New Pizza</h1>
            <div className='flex flex-col w-[500px] m-2'>
                <label className='font-bold'>Choose an Image </label>
                <input type='file' onChange={(e) => setFile(e.target.files[0])} />
            </div>

            <div className='flex flex-col w-[500px] m-2'>
                <label className='font-bold'>Title </label>
                <input className='border-b  border-gray-500' type='text' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='flex flex-col w-[500px] m-2'>
                <label className='font-bold'>Description</label>
                <textarea className='border border-1 border-gray-400'
                    rows={4}
                    type='text'
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>

            <div className='flex flex-col w-[500px] m-2'>
                <label className='font-bold'>Prices</label>
                <div className='flex'>
                    <input className='pl-2 m-1 border-b  border-gray-500' type='number' placeholder='small' onChange={(e) => changePrice(e, 0)} />
                    <input className='pl-2 m-1 border-b  border-gray-500' type='number' placeholder='medium' onChange={(e) => changePrice(e, 1)} />
                    <input className='pl-2 m-1 border-b  border-gray-500' type='number' placeholder='large' onChange={(e) => changePrice(e, 2)} />
                </div>
            </div>

            <div className='flex flex-col w-[500px] m-2'>
                <label>Extra</label>
                <div>
                    <input className='m-1 border-b  border-gray-500 pl-2' type='text' placeholder='item' name='text' onChange={handleExtraInput} />
                    <input className='m-1 border-b  border-gray-500 pl-2' type='number' placeholder='price' name='price' onChange={handleExtraInput} />
                    <button className='bg-teal-700 px-3 py-1 rounded-md text-white font-medium' onClick={handleExtra}>Add Extra</button>
                </div>
            </div>

            {/* <div>
                {extraOptions.map((option) => (
                    <span key={option.id}>
                        {option.text}
                    </span>
                ))}
            </div> */}

            <div className='bg-gray-600 w-[50%] items-center justify-center flex rounded-md text-white font-medium'>
                <button onClick={handleCreate}>Create</button>
            </div>

        </div>

    )
}

export default add