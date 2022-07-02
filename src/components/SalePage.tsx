import React from 'react'
import Catergories from './SalePageComponent/Catergories'
import Image from "next/image";
import P1 from "../stores/images/p-4.png"

export default function SalePage() {
    return (
        <div className=' w-screen h-auto flex px-12  ' > 
            <div className=' mr-8 h-full my-auto' >  
                <Catergories />
            </div>
            <div style={{ height: '78vh'}} className=' w-auto relative flex flex-1 flex-col justify-center items-center ' >
                <div style={{ height: '60vh'}} className=' w-full relative flex ' > 
                    <Image src={P1} layout="fill" objectFit='cover' className=' rounded-lg ' />
                </div>
                <div className=' w-full pt-8 flex justify-center ' >
                    <p className=' text-2xl font-Mulish-SemiBold mx-4 text-[#1da1f2] ' >Rent</p>
                    <p className=' text-2xl font-Mulish-SemiBold mx-4 text-[#fff] '>Buy</p>
                    <p className=' text-2xl font-Mulish-SemiBold mx-4 text-[#fff] '>Add To List</p>
                </div>
                <div className=' bg-[#fff] w-full h-auto flex flex-1 rounded-md py-2 mt-4 ' >
                    <div className='w-full border-r border-[#e4eaf7] flex items-center flex-col px-4 ' >
                        <p className=' text-sm font-Mulish-Medium ' >Select State</p>
                        <select placeholder='Select State' className=' bg-white w-full py-2 my-2 font-Mulish-Medium' >
                            <option>Something</option>
                        </select>
                    </div>
                    <div className='w-full border-r border-[#e4eaf7] flex items-center flex-col px-4 ' >
                        <p className=' text-sm font-Mulish-Medium ' >Select State</p>
                        <select placeholder='Select State' className=' bg-white w-full py-2 my-2 font-Mulish-Medium' >
                            <option>Something</option>
                        </select>
                    </div>
                    <div className='w-full border-r border-[#e4eaf7] flex items-center flex-col px-4 ' >
                        <p className=' text-sm font-Mulish-Medium ' >Select State</p>
                        <select placeholder='Select State' className=' bg-white w-full py-2 my-2 font-Mulish-Medium ' >
                            <option>Something</option>
                        </select>
                    </div> 
                    <button className='w-full flex items-center justify-center px-4 ' >
                        <svg width="25px" height="25px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <title>ionicons-v5-i</title>
                            <line x1="368" y1="128" x2="448" y2="128" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><line x1="64" y1="128" x2="304" y2="128" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><line x1="368" y1="384" x2="448" y2="384" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><line x1="64" y1="384" x2="304" y2="384" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><line x1="208" y1="256" x2="448" y2="256" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><line x1="64" y1="256" x2="144" y2="256" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><circle cx="336" cy="128" r="32" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><circle cx="176" cy="256" r="32" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/><circle cx="336" cy="384" r="32" stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={32}/>
                        </svg>
                        <p className=' text-base font-Mulish-Medium text-center ml-4 ' >Advance<br/> Filter</p>
                    </button>
                    <div className='w-full flex items-center justify-center flex-col px-4 ' >
                        <button ><p className=' bg-[#1da1f2] py-3 text-sm text-white px-4 rounded-md ' >Search Property</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
