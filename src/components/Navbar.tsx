import React from 'react'
import Image from "next/image";
import logo from "../stores/images/logo-light.png"

export default function Navbar() {
    return (
        <nav className=' w-full bg-[#070b14] px-9 py-6 flex justify-center border-b border-[#20242c] ' >
            <div className='w-full flex items-center  px-4 ' > 
                <a href='/' >
                    <Image src={logo} width={170} height={61} />
                </a>
                <div className=' w-96 mx-auto h-11 relative flex items-center ' >
                    <input placeholder='Search...' className=' w-96 font-Mulish-ExtraBold px-4 h-11 rounded-md ' />
                    <button className=' absolute right-0 mx-3 flex items-center h-full' >
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
                            <text transform="matrix(1 0 0 1 168.783 543.8093)" fill="#FFFF00" font-family="'Verdana-Bold'" font-size="20">simpleicon.com</text>
                            <text transform="matrix(1 0 0 1 9.1931 567.8093)" fill="#FFFF00" font-family="'Verdana'" font-size="20">Collection Of Flat Icon, Symbols And Glyph Icons</text>
                            <g>
                                <g>
                                    <path d="M338.752,99.482c-65.965-65.974-173.306-65.974-239.277,0c-65.967,65.964-65.967,173.305,0,239.269
                                        c63.708,63.712,165.99,65.879,232.342,6.544l13.413,13.413c-3.34,8.56-1.59,18.623,5.311,25.528l70.782,70.782
                                        c9.305,9.31,24.397,9.305,33.696,0c9.31-9.299,9.31-24.387,0-33.696l-70.777-70.772c-6.905-6.899-16.988-8.65-25.533-5.311
                                        l-13.413-13.423C404.636,265.465,402.463,163.188,338.752,99.482z M119.698,318.539c-54.819-54.819-54.819-144.015,0-198.834
                                        c54.819-54.83,144.017-54.819,198.836,0s54.819,144.02,0,198.839S174.517,373.358,119.698,318.539z"/>
                                    <path d="M153.1,151.877c23.944-23.95,51.774-41.331,81.037-52.169c-33.153-1.886-68.66,11.014-95.909,38.253
                                        c-27.624,27.626-40.488,63.746-38.142,97.302C110.841,205.137,128.511,176.46,153.1,151.877z"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className=' w-auto flex items-center text-sm font-Mulish-Bold text-white ' >
                    <a href='#' ><p className=' mx-4 text-[#1ba1f2] ' >Home</p></a>
                    <a href='#' ><p className=' mx-4 ' >About Us</p></a>
                    <a href='#' ><p className=' mx-4 ' >Contact</p></a>
                    <a href='#' ><p className=' mx-4 ' >Blog</p></a>
                    <a href='#' ><p className=' mx-4 ' >FAQs</p></a>
                    <a href='#' ><p className=' mx-4 ' >Sign In</p></a>
                    <a href='#' ><p className=' bg-[#1da1f2] py-3 px-4 rounded-md ' >Add Property</p></a>
                </div>
            </div>
        </nav>
    )
} 