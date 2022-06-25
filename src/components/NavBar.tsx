import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import React from 'react'
import Avatar from "../assets/images/avatar3.png"

export default function NavBar(props: any) {
    return ( 
        <div className=' w-full flex  lg:h-auto py-2 px-4 text-white lg:text-black lg:py-11 justify-between bg-[#232759] lg:bg-white items-center' >
            <button className='lg:hidden' onClick={()=> props.open()} >
                <svg className='' width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="20" fill="#282E60"/>
                    <rect width="30" height="4" rx="2" fill="#D9D9D9"/>
                    <rect y="8" width="30" height="4" rx="2" fill="#D9D9D9"/>
                    <rect y="16" width="30" height="4" rx="2" fill="#D9D9D9"/>
                </svg>
            </button>

            <div className=' hidden lg:flex md:w-461px lg:w-461px ' >
                <InputGroup >
                    <InputLeftElement 
                    children={ 
                        <svg className='ml-4 mt-1'  width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.25395" cy="8.24425" r="7.63166" stroke="black" stroke-width="0.526321"/>
                            <line x1="13.5215" y1="13.7223" x2="22.8517" y2="22.3349" stroke="black" stroke-width="0.717711"/>
                        </svg>
                    }
                    />
                    <Input className=' font-Nunito-Medium ' borderRadius='36px' background='#F0F0F0'  size='lg' fontSize='17px' paddingLeft='50px' placeholder="Search" /> 
                </InputGroup>
            </div>  
            <div className=' flex ml-auto items-center ' >
                <svg className=' w-9 h-9 lg:w-12 lg:h-12' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.120453" width="47.7591" height="47.7591" rx="23.8796" fill="#F0F0F0"/>
                    <path d="M24.3969 38.3126H24.3343L24.273 38.3253C24.142 38.3526 24.0088 38.368 23.875 38.3711C23.26 38.3661 22.6712 38.1204 22.2351 37.6864C21.9456 37.3984 21.7387 37.0427 21.63 36.6562H26.1142C26.0882 36.7576 26.0553 36.8574 26.0159 36.9549C25.8648 37.2987 25.6346 37.6021 25.3441 37.8402C25.0676 38.0668 24.7439 38.2281 24.397 38.3126H24.3969ZM15.3595 30.7307L15.6955 30.5627V30.187V22.1277V22.1163L15.6951 22.105C15.622 20.1469 16.0633 18.204 16.9752 16.4698C17.407 15.7086 17.9948 15.0473 18.7001 14.5291C19.4078 14.0091 20.2177 13.6451 21.0764 13.4611L21.5568 13.3581V12.8667V11.4307C21.5568 10.7953 22.072 10.2801 22.7074 10.2801H25.0519C25.6874 10.2801 26.2025 10.7953 26.2025 11.4307V12.8667V13.3469L26.6696 13.4581C28.4086 13.8721 29.7385 14.8259 30.6446 16.2573C31.5586 17.7013 32.0638 19.6688 32.0638 22.1277V30.187V30.5627L32.3999 30.7307L34.3585 31.71C34.7483 31.9049 34.9945 32.3033 34.9945 32.7391V32.8246C34.9945 33.46 34.4794 33.9752 33.844 33.9752H13.9154C13.2799 33.9752 12.7648 33.46 12.7648 32.8246V32.7391C12.7648 32.3033 13.011 31.9049 13.4008 31.71L15.3595 30.7307Z" stroke="black" stroke-width="1.21569"/>
                </svg>
                <p className=" font-Nunito-Medium mx-3 " >Hi, Olayimika </p>
                <img src={Avatar} alt='profile' className=' w-12 h-12 lg:w-14 lg:h-14 rounded-full ' />
            </div>
        </div> 
    )
} 