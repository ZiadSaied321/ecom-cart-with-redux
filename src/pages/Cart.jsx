import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartCard from '../components/CartCard'
const Cart = () => {
  const selector = useSelector(state=>state.cart.items)
  return (
    <div className='px-20 max-w-[950px] flex flex-col gap-8 mx-auto mt-10'>
    {
      selector.map((item)=><CartCard key={item.id} {...item}/>)
    }
    </div>
  )
}

export default Cart