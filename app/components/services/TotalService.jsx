'use client'

import {  FaAward } from "react-icons/fa"
import {GiLoveMystery} from 'react-icons/gi'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {AiOutlinePieChart} from 'react-icons/ai'

function TotalService() {
    return (
        <div className='w-full bg-white'>
            <div className='container py-5 grid md:grid-cols-2 gap-5 lg:grid-cols-4'>
                <div className='flex flex-col gap-2 justify-center items-center p-3 border '>
                    <div className='flex gap-5 items-center'>
                        <span className='text-blue-600'><FaAward size={60} /></span>
                        <h1 className='text-5xl text-gray-800 font-bold'>05</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-xl font-bold text-gray-800'>Award</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center p-3 border '>
                    <div className='flex gap-5 items-center'>
                        <span className='text-blue-600'><GiLoveMystery size={60} /></span>
                        <h1 className='text-5xl text-gray-800 font-bold'>98%</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-xl font-bold text-gray-800'>Happy Clients</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center p-3 border '>
                    <div className='flex gap-5 items-center'>
                        <span className='text-blue-600'><MdOutlineDashboardCustomize size={60} /></span>
                        <h1 className='text-5xl text-gray-800 font-bold'>200</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-xl font-bold text-gray-800'>Project Complete</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center p-3 border '>
                    <div className='flex gap-5 items-center'>
                        <span className='text-blue-600'><AiOutlinePieChart size={60} /></span>
                        <h1 className='text-5xl text-gray-800 font-bold'>04</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-xl font-bold text-gray-800'>Years Complete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalService