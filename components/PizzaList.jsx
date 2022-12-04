import React from 'react'
import PizzaCard from './PizzaCard'



const PizzaList = ({ pizzaList }) => {
    return (
        <div className='flex flex-col items-center px-5 py-3'>
            <h1 className='font-bold text-3xl my-3 text-center'>THE BEST PIZZA IN TOWN</h1>
            <p className='text-xl text-gray-600 w-[70%] mt-2 text-center'>Welcome to our pizzeria, choose our special recipes and you will know the best flavor in the city. We hope you like it and enjoy it</p>
            <div className='flex items-center justify-center w-[100%] flex-wrap'>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}

            </div>
        </div>
    )
}

export default PizzaList


