 import React, { useState, useContext } from 'react'
import { assets as adminAssets } from '../assets/admin_assets/assets'
import { assets as frontAssets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext.jsx'


function Navbar() {

const [visible,setVisible] = useState(false)
const {setShowSearch,getCartCount}= useContext(ShopContext)


const { products, currency } = useContext(ShopContext) // example usage
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to="/"><img src={frontAssets.logo} className='w-36' alt=""/></Link>

        
         <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1">
             <p>Home</p>
             <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden'></hr>
            </NavLink>

             <NavLink to="/Collection" className="flex flex-col items-center gap-1">
             <p>Collection</p>
             <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden'></hr>
            </NavLink>

             <NavLink to="/About" className="flex flex-col items-center gap-1 ">
             <p>About</p>
             <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden'></hr>
            </NavLink>

             <NavLink to="/Contact" className="flex flex-col items-center gap-1">
             <p>Contact</p>
             <hr className='w-2/4 border-none h-[1.5px]  bg-gray-700 hidden'></hr>
            </NavLink>
         </ul>

         <div className='flex items-center gap-6'> 
          <img onClick={() => setShowSearch(true)} src={frontAssets.search_icon} className='w-5 cursor-pointer' alt=''></img>

          <div className='group relative'>
            <img className="w-5 cursor-pointer" src={frontAssets.profile_icon} alt=''></img>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <Link to="/Profile" className='cursor-pointer hover:text-black'>My profile</Link>
              <Link to="/Orders" className='cursor-pointer hover:text-black'>My orders</Link>
              <Link to="/Login" className='cursor-pointer hover:text-black'>Logout</Link>
                 </div>

            </div>
          </div>
            <Link to="/cart" className='relative'>
            <img src={frontAssets.cart_icon} className='w-5' alt=''></img>
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={() => setVisible(true)} src={frontAssets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=''/>


         </div>
         {/*sidebar menu for mobile devices*/}
         <div className={`absolute top-0 right-0  bottom-0 overflow-hidden  bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
             <div  onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className='h-4 rotate180' src={frontAssets.dropdown_icon} alt=''></img>
              <p>back</p>   

             </div>

             <NavLink onClick={()=>setVisible(false)} to='/' className="py-2 pl-6 border">
               Home
             </NavLink>
             
             <NavLink onClick={()=>setVisible(false)} to='/Collection'  className="py-2 pl-6 border">
               Collection
             </NavLink>
             
             <NavLink onClick={()=>setVisible(false)} to='/About'  className="py-2 pl-6 border">
                About
             </NavLink>
             
             <NavLink onClick={()=>setVisible(false)} to='/Contact' className="py-2 pl-6 border">
                Contact
             </NavLink>
             

            </div>
              

              
              </div>       
    </div>
  )
}

export default Navbar