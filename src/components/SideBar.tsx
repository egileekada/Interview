import React from 'react'
import SideBarIcons from './SideBarIcons'
import Logo from "../assets/images/logo.png"

export default function SideBar(props: any) {

    const TabName =[ 
        'Dashboard', 
        'Settings', 
        'Feeds', 
        'User managements', 
        'Contacts managements', 
        'Departments', 
        'Schedule & Reports', 
        'Inventory', 
        'Sales & Payments', 
        'Companies', 
        'Requests', 
        'Messaging', 
        'Conferencing', 
    ]

    const [activeTab, setActiveTab] = React.useState('Dashboard')

    return (
        <div className='relative ' >
            <button className=' absolute lg:hidden right-6 top-6 ' onClick={()=> props.close()} >
                <svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div className=' px-6 py-12 flex items-center ' >
                <img src={Logo} className='w-20' alt="logo" />
                <p className='ml-3 text-xl md:text-base lg:mr-9 text-white font-Nunito-Bold ' >360 Corporation</p>
            </div>
            {TabName.map((item: any, index: any)=> {
                return(
                    <button onClick={()=> setActiveTab(item)} key={index} className={activeTab === item ? ' bg-[#232759] flex items-center text-white h-14 w-full  ' : ' flex items-center text-white h-14 w-full '} >
                        <div className={activeTab === item ? ' px-4 border-l-4 h-10 flex items-center border-[#58A0DF] ' : ' px-4 h-10 flex items-center '} > 
                            <div className='w-8' >
                                <SideBarIcons name={item} active={activeTab} />
                            </div>
                            <p className=' ml-3 font-Nunito-SemiBold lg:text-lg md:text-sm ' >{item}</p>
                        </div>
                    </button>
                )
            })}
            <svg className=' -mt-40 ' width="279" height="277" viewBox="0 0 279 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4" filter="url(#filter0_f_2_1149)">
                    <ellipse cx="49.5" cy="224.997" rx="102.5" ry="97.9974" fill="#58A0DF"/>
                </g>
                <defs>
                    <filter id="filter0_f_2_1149" x="-179.072" y="0.92765" width="457.145" height="448.14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="63.0362" result="effect1_foregroundBlur_2_1149"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
} 