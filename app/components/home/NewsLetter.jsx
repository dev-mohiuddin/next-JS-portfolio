import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full bg-white border border-b border-t-0'>
        <div className='container flex flex-col md:flex-row gap-4 justify-around items-center py-8 md:py-14'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold text-gray-800'>Subscribe to our Newsletter</h1>
                <p className='text-base font-medium text-gray-700'>Subscribe our newsletter gor get notification about new updates, etc...</p>
            </div>
            <div className='relative flex flex-col'>
                <form action="">
                    <input className='h-12 rounded-full w-80 md:w-96 px-4 outline-0 bg-sky-100' type="text" placeholder='Your Email' required />
                    <input type="submit" className='h-12 absolute right-0 text-white font-medium cursor-pointer bg-blue-600 px-5 rounded-r-full' value="Subscribe" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter