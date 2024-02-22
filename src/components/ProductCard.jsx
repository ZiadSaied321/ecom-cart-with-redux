import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';
const ProductCard = (props) => {
  const selector = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const { id, title, price, image } = props;

  const isExist = () => {
    const exist = selector.find((item) => item.id == id)
    if (exist == undefined) {
      return false
    }
    return true
  }
  const cartAction = () => {
    if(isExist()){
      dispatch(removeFromCart(id))
    }
    else{
      dispatch(addToCart(props))
    }
  }

  return (
    <div className='p-1 px-4 w-60 border-4 rounded-md'>
      <img className='rounded-md w-40 h-52 mx-auto' src={image} alt={title} />
      <h2 className='truncate text-gray-700 font-semibold mt-2 text-lg'>{title}</h2>
      <div className='flex justify-between items-center'>
        <button onClick={() => cartAction()} className='rounded-lg bg-blue-500 font-semibold text-white text-lg px-2 py-1 mt-2 mb-2'>{isExist()?'Remove item':'Add To Cart'}</button>
        <h2 className='font-bold text-gray-800'>{`${price} $`}</h2>
      </div>
    </div>
  )
}

export default ProductCard