import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx'

import Title from './Title.jsx'
function BestSellers() {
  
    const {products}=useContext(ShopContext)
    const [bestsellers,setBestSellers] = useState([])
    useEffect(()=>{
      
     
   let bestProduct = products.filter((item) =>  (item.bestseller));
      setBestSellers(bestProduct.slice(0,5));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
             <Title text1={"best"} text2={"sellers"}/>
        <p className='text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base'>
       Check out our top-selling products that everyone is buying right now. Trusted by hundreds of happy customers.</p>
        </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
         {
            bestsellers.map((item,index)=>(<ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>))

            
         }
     </div>
       
       
    </div>
  )
}

export default BestSellers