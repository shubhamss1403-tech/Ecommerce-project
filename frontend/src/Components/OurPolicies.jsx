import React from 'react'
import { assets as frontAssets} from '../assets/frontend_assets/assets'

function OurPolicies() {
  return (
    <div className=' flex flex-col sm:flex-row  justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={frontAssets.exchange_icon} className='w-12 m-auto mb-4'  alt=''></img>
            <p className='font-semibold '>easy exchange policies</p>
            <p className='text-gray-400'> we offer hassle free exchange policies</p>

        </div>

         <div>
            <img src={frontAssets.quality_icon} className='w-12 m-auto mb-4'  alt=''></img>
            <p className='font-semibold '> 7 days return policies</p>
            <p className='text-gray-400'> we provide a 7 days free return policy</p>

        </div>

         <div>
            <img src={frontAssets.support_img} className='w-12 m-auto mb-4'  alt=''></img>
            <p className='font-semibold '>best customer support</p>
            <p className='text-gray-400'> we provide 24/7 customer support</p>

        </div>
    </div>
  )
}

export default OurPolicies