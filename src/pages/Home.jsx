import React from 'react'
import ProductCard from '../components/ProductCard'
import { useFetch } from '../API-calls/useFetch'
const Home = () => {
    const {loading,error,data} = useFetch('https://fakestoreapi.com/products')
    if(!loading && data?.length){
        return (
            <div className='mx-auto px-4 w-full max-w-[950px] items-center justify-center flex flex-wrap gap-4'>
                {
                    data.map((item)=><ProductCard key={item.id} {...item} />)
                }
            </div>
        )
    }
    else{
        return <div className='w-screen h-screen flex justify-center items-center'><h1 className='font-extrabold'>Loading ......</h1></div>
    }
    
}

export default Home