import React from 'react'

function Number() {
  return (
    <div className='w-full bg-white'>
        <div className='container flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-gray-800'>Let’s Build Something Really Amazing!</h1>
                <p className='text-lg text-gray-700 font-medium'>Hit the button below or give us a call!</p>
            </div>
            <div className='flex gap-1 items-center'>
                <h1 className='text-lg text-gray-700 font-medium'>Call us now:</h1>
                <p className='text-base text-blue-500 font-semibold'>(+91) 94030 69009 (+91) 86000 37030</p>
            </div>
        </div>
    </div>
  )
}

export default Number