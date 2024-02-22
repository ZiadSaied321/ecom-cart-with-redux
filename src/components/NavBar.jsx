import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="bg-slate-50 drop-shadow-md mb-2 px-4">
            <div className='mx-auto max-w-[600px] items-center h-10 flex gap-4'>
            <h1 className='min-w-max font-bold text-blue-950'><Link to='/'>Ecom App</Link></h1>
            <ul className='w-full list-none flex flex-row justify-between'>
                <li className='hidden md:block'><NavLink to='/' className={({isActive})=>isActive?'font-semibold text-blue-500':null}>Home</NavLink></li>
                <li className='w-full text-right'><NavLink to='/cart' className={({isActive})=>isActive?'font-semibold text-blue-500':null}>Cart</NavLink></li>
            </ul>
        </div>
        </div>
    )
}

export default NavBar