import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-white pt-14 pb-5 md:pb-8'>
        <div className='container flex flex-col md:flex-row justify-around gap-10 md:gap-20 items-center'>
            <div className='items-center'>
                <h1 className='text-2xl font-bold text-gray-800 mb-5'>Contact Us</h1>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold text-blue-500'>(+91) 94030 69009</h1>
                    <h1 className='text-2xl font-bold text-blue-500 mb-3'>(+91) 94030 69009</h1>
                    <p className='text-base font-medium text-gray-700'>Kandivali West, Mumbai</p>
                    <p className='text-base font-medium text-gray-700'>utkarsh.deshmukh@grayscaledigitals.com</p>
                    <p className='text-base font-medium text-gray-700'>Mon - Sat: 9:00 - 19:00 IST</p>
                </div>
            </div>
            <div className='items-center'>
                <h1 className='text-2xl font-bold text-gray-800 mb-5'>Quick Link</h1>
                <div className='flex flex-col gap-2 list-none'>
                    <li className='text-lg hover:underline hover:text-blue-600 duration-300 cursor-pointer font-medium text-gray-700'>About Us</li>
                    <li className='text-lg hover:underline hover:text-blue-600 duration-300 cursor-pointer font-medium text-gray-700'>Blog / Quotes</li>
                    <li className='text-lg hover:underline hover:text-blue-600 duration-300 cursor-pointer font-medium text-gray-700'>Contact Us</li>
                    <li className='text-lg hover:underline hover:text-blue-600 duration-300 cursor-pointer font-medium text-gray-700'>Payment</li>
                    <li className='text-lg hover:underline hover:text-blue-600 duration-300 cursor-pointer font-medium text-gray-700'>Clientele</li>
                </div>
            </div>
        </div>
        <div className='container mt-10'>
            <p className='text-sm font-medium text-gray-700 text-center'>Copyright © 2023 All rights reserved by <span className='text-base cursor-pointer hover:text-blue-600 duration-300'>Grayscale Digitals</span></p>
        </div>
    </div>
  )
}

export default Footer