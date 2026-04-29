import React from 'react'
import { assets as adminAssets } from '../assets/admin_assets/assets'
function Footer() {
  return (
    <div>
    <div className='flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={adminAssets.logo} className=' mb-5 w-32 ' alt=''></img>
            <p className='w-full md:w-2/3  text-grey-600'>
            <p>
    Welcome to the admin panel, your central hub to manage and monitor all operations efficiently. 
      Here you can control products, track orders, manage users, and analyze performance with ease. 
    Designed for simplicity and power, this dashboard helps you stay organized and make better decisions faster.
</p>
          </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>company </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>1-33333323</li>
                <li>shubhamss1403@gmail.com</li>
            </ul>
        </div>


         
    </div>
    <div>
        <hr></hr>
        <p className='py-5 text-sm text-center '>
            © 2026 Shubhamss1403@gmail.com. All rights reserved.
        </p>
    </div>

    </div>
  )
}
 
export default Footer