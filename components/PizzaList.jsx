import React from 'react'
import PizzaCard from './PizzaCard'

const PizzaList = ({ pizzaList }) => {
    return (
        <div className='flex flex-col items-center px-5 py-3'>
            <h1 className='font-bold text-3xl my-3'>THE BEST PIZZA IN TOWN</h1>
            <p className='text-xl text-gray-600 w-[70%] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum consequuntur qui! Quia, maxime voluptate ex dolores veritatis incidunt sit eveniet illum, architecto animi esse sapiente fugit modi eius tenetur.</p>
            <div className='flex items-center justify-center w-[100%] flex-wrap'>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}

            </div>
        </div>
    )
}

export default PizzaList