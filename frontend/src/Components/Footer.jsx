import React from 'react'
import { assets as adminAssets } from '../assets/admin_assets/assets'
function Footer() {
  return (
    <div>
    <div className='flex flex-col sm:grid  grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={adminAssets.logo} className=' mb-5 w-32 ' alt=''></img>
            <p className='w-full md:w-2/3  text-grey-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia architecto, et nobis quisquam ut accusantium non repellendus natus modi fugit veniam? Eligendi facere numquam aperiam. Omnis perferendis obcaecati iure!
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
                <li>support@forever.com</li>
            </ul>
        </div>


         
    </div>
    <div>
        <hr></hr>
        <p className='py-5 text-sm text-center '>
              copyright © 2024 forever. all rights reserved.
        </p>
    </div>

    </div>
  )
}
 
export default Footer