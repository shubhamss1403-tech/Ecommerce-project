import React, { useEffect, useState } from 'react'

 function ProductList() {
  const [products, setProducts] = useState([])
  

  async function userData() {
   const response = await fetch('https://fakestoreapi.com/products')
      let data=  await response.json()
      console.log(data)
      setProducts(data)
     
       
  }

  useEffect(() => {
    userData()
    console.log("useEffect called")
  }, [])

   
  return (
    <div className='mt-10 mb-8'>
      <h1 className='mb-5 text-2xl font-semibold leading-tight max-sm:text-xl'>Product List from fetch data from api</h1>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((item) => (
          <div className='rounded-[14px] border border-[#e8e8e8] bg-white p-3.5 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]' key={item.id}>
            <img className='mb-2.5 h-[170px] w-full object-contain' src={item.image} alt={item.title} />
            <h2 className='mb-2 text-base font-semibold leading-[1.35] line-clamp-2'>{item.title}</h2>
            <p className='mb-2 text-[17px] font-bold text-[#1f6feb]'>${item.price}</p>
            <p className='text-sm leading-[1.45] text-[#4d4d4d] line-clamp-3'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
  }

export default ProductList
     