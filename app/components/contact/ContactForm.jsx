import React from 'react'

function ContactForm() {
    return (
        <div className='w-full bg-white'>
            <div className='container flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5'>
                <div className='flex flex-col w-full md:w-2/3'>
                    <h1 className='text-lg md:text-xl font-semibold text-gray-800 mb-8'>Thank you for your interest.
                        Please fill out the form below to inquire about our work in Digital.</h1>
                    <form className='flex flex-col gap-5 md:gap-8' action="">
                        <div className='flex md:flex-row flex-col items-center gap-5'>
                            <div className='flex items-center w-full'>
                                <input type="text" className='w-full h-10 outline-0 border border-gray-500 px-4 rounded-full' placeholder='Name'  />
                            </div>
                            <div className='flex items-center w-full'>
                                <input type="email" className='w-full h-10 outline-0 border border-gray-500 px-4 rounded-full' placeholder='Email' />
                            </div>
                        </div>
                        <div className='flex items-center gap-5 flex-col md:flex-row'>
                            <div className='flex items-center w-full'>
                                <input type="text" className='w-full h-10 outline-0 border border-gray-500 px-4 rounded-full' placeholder='Phone' />
                            </div>
                            <div className='flex items-center w-full'>
                                <input type="text" className='w-full h-10 outline-0 border border-gray-500 px-4 rounded-full' placeholder='Organization' />
                            </div>
                        </div>
                        <div className='flex items-center w-full'>
                            <div className='flex items-center w-full'>
                                <textarea className='w-full outline-0 border rounded-lg border-gray-500 p-4' placeholder='Message' id="" cols="10" rows="5"></textarea>
                            </div>
                        </div>
                        <div>
                            <input className='px-7 py-2.5 bg-white border-2 border-blue-600 rounded-full text-lg font-medium cursor-pointer text-blue-600 hover:bg-blue-600 hover:text-white duration-300' type="submit" value="Contact Us" />
                        </div>
                    </form>
                </div>
                <div className='flex w-full md:w-1/3 items-start justify-center'>
                    <div className=''>
                        <h1 className='text-2xl font-bold text-gray-800 mb-5'>Contact Us</h1>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-2xl font-bold text-blue-500'>(+91) 94030 69009</h1>
                            <h1 className='text-2xl font-bold text-blue-500 mb-3'>(+91) 94030 69009</h1>
                            <p className='text-base font-medium text-gray-700'>Kandivali West, Mumbai</p>
                            <p className='text-base font-medium text-gray-700'>utkarsh.deshmukh@grayscaledigitals.com</p>
                            <p className='text-base font-medium text-gray-700'>Mon - Sat: 9:00 - 19:00 IST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm