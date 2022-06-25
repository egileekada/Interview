import React from 'react'
import Avatar3 from "../assets/images/avatar3.png";
import Avatar2 from "../assets/images/avatar2.png";
import Avatar from "../assets/images/avatar.png";
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

export default function Feeds() {
    return (
        <div className=' lg:w-653px md:w-517px w-full' >
            <div className=' w-full flex lg:flex-row flex-col lg:items-center lg:px-0 px-4 lg:py-0 py-4 lg:pl-4 rounded-md bg-[#E8E9EB] lg:h-12 ' >
                <div className=' flex items-center lg:mb-0 mb-2 ' >
                    <svg className=' w-6' viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0737 19.2436C19.4295 19.2436 21.6079 19.2436 22.9605 17.8904C24.3142 16.5384 24.3142 14.3609 24.3142 10.0069C24.3142 5.653 24.3142 3.47545 22.9605 2.12344C21.6079 0.770264 19.4295 0.770264 15.0737 0.770264H10.4534C6.09767 0.770264 3.91921 0.770264 2.56663 2.12344C1.21289 3.47545 1.21289 5.653 1.21289 10.0069C1.21289 14.3609 1.21289 16.5384 2.56663 17.8904C3.32089 18.6455 4.33157 18.9792 5.83316 19.1258" stroke="#404690" stroke-width="1.31334" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.0737 19.2436C13.6461 19.2436 12.0729 19.8209 10.6371 20.5656C8.32929 21.7629 7.17538 22.3621 6.60709 21.9799C6.03879 21.5989 6.14622 20.4155 6.36221 18.0497L6.41073 17.5117" stroke="#404690" stroke-width="1.31334" stroke-linecap="round"/>
                    </svg>
                    <p className=' font-Nunito-SemiBold lg:text-xl text-[rgb(64,70,144)] ml-3 ' >Recent General Feeds</p>
                </div>
                <div className=' lg:w-64 md:w-52 lg:ml-auto w-full lg:pr-1  ' >
                    <InputGroup >
                        <InputLeftElement 
                        children={ 
                            <svg className='ml-4 mt-1'  width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.25395" cy="8.24425" r="7.63166" stroke="black" stroke-width="0.526321"/>
                                <line x1="13.5215" y1="13.7223" x2="22.8517" y2="22.3349" stroke="black" stroke-width="0.717711"/>
                            </svg>
                        }
                        />
                        <Input className=' font-Nunito-Medium ' borderRadius='10px' background='#FAFAFA'  size='md' fontSize='17px' paddingLeft='50px' placeholder="Search" /> 
                    </InputGroup>
                </div > 
            </div>
            <div className='w-full p-4' >
                <div className='w-full my-4 ' >
                    <div className='w-full flex justify-between items-center' >
                        <div className='w-auto flex items-center' >
                            <div className='w-12 mr-3' >
                                <img src={Avatar2} alt='avatar2' className='w-12 object-cover rounded-full'  />
                            </div>
                            <p className=' font-Nunito-Bold text-sm' >Moses Olaniyi</p>
                        </div>
                        <p className=' font-Nunito-SemiBold text-sm text-[#6B6A6A] ' >Tue 24 May, 2022 04:01:22</p>
                    </div>
                    <p className=' font-Nunito-Medium mt-4 text-sm text-[#403C3C] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.</p>
                </div>
                <div className='w-full my-4 ' >
                    <div className='w-full flex justify-between items-center' >
                        <div className='w-auto flex items-center' >
                            <div className='w-12 mr-3' >
                                <img src={Avatar} alt='avatar' className='w-12 object-cover rounded-full'  />
                            </div>
                            <p className=' font-Nunito-Bold text-sm' >Julliet Chinwere</p>
                        </div>
                        <p className=' font-Nunito-SemiBold text-sm text-[#6B6A6A] ' >Tue 24 May, 2022 04:01:22</p>
                    </div>
                    <p className=' font-Nunito-Medium mt-4 text-sm text-[#403C3C] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.</p>
                </div>
                <div className='w-full my-4 ' >
                    <div className='w-full flex justify-between items-center' >
                        <div className='w-auto flex items-center' >
                            <div className='w-12 mr-3' >
                                <img src={Avatar3} alt='avatar3' className='w-12 object-cover rounded-full'  />
                            </div>
                            <p className=' font-Nunito-Bold text-sm' >Super Admin</p>
                        </div>
                        <p className=' font-Nunito-Bold text-sm text-[#6B6A6A] ' >Tue 24 May, 2022 04:01:22</p>
                    </div>
                    <p className=' font-Nunito-Medium mt-4 text-sm text-[#403C3C] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.</p>
                </div>
                <div className='w-full my-4 ' >
                    <div className='w-full flex justify-between items-center' >
                        <div className='w-auto flex items-center' >
                            <div className='w-12 mr-3' >
                                <img src={Avatar2} alt='avatar2' className='w-12 object-cover rounded-full'  />
                            </div>
                            <p className=' font-Nunito-Bold text-sm' >Moses Olaniyi</p>
                        </div>
                        <p className=' font-Nunito-SemiBold text-sm text-[#6B6A6A] ' >Tue 24 May, 2022 04:01:22</p>
                    </div>
                    <p className=' font-Nunito-Medium mt-4 text-sm text-[#403C3C] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.</p>
                </div>
            </div>
        </div>
    )
} 