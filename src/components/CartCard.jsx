import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'
const CartCard = ({ id, title, description, price, image }) => {
  const dispatch = useDispatch()
  return (
    <div className='border-4 rounded-md p-2 grid grid-cols-3 items-center'>
      <img className='rounded-lg w-40 h-52 mx-auto' src={image} alt={title} />
      <div className='max-w-96'>
        <h1 className='font-bold mb-2'>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='flex flex-col justify-center items-end'>
        <h2 className='font-bold text-gray-800'>{`${price} $`}</h2>
        <button onClick={() => {dispatch(removeFromCart(id))}} className='min-w-max rounded-lg bg-blue-500 font-semibold text-white text-lg px-2 py-1 mt-2 mb-2'>Remove item</button>
      </div>
    </div>
  )
}

export default CartCard