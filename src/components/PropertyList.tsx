import React from 'react'
import Image from "next/image";
import P1 from "../stores/images/p-4.png"
import { IoIosHeartEmpty, IoIosMail, IoMdBed, IoMdCall, IoMdMove, IoMdPin } from "react-icons/io";

export default function PropertyList() {
    return (
        <div className=' w-full flex flex-col justify-center items-center ' >
            <p className=' font-Mulish-Bold text-4xl text-[#1da1f2] ' >Recent Listed Property</p>
            <p className=' font-Mulish-Medium text-base text-center mt-1 ' >Looking for one or more bedroom terraced duplex, semi detached duplex, one or more bedroom <br/> detached, or all rooms en suite. Explore our featured property listings.</p>
            <div className=' grid grid-cols-3 gap-6 my-12 ' >
                <div className=' w-96 rounded-xl shadow-xl  ' >
                    <div className=' w-96 h-72 relative rounded-t-xl ' >
                        <Image src={P1} layout="fill" className='rounded-t-xl' objectFit='cover' />
                    </div>
                    <div className=' w-full px-6 py-3' >
                        <div className=' w-full flex items-center text-sm ' >
                            <button style={{ marginLeft: '2px'}} className=' h-8 px-2 font-Mulish-Medium rounded bg-[#e8f5fe] text-[#23b3f8] ' >Save</button>
                            <button style={{ marginLeft: '2px'}} className=' h-8 px-2 font-Mulish-Medium rounded bg-[#cafbb8] text-[#0d843b] ' >Book</button>
                            <button style={{ marginLeft: '2px'}} className=' h-8 px-2 font-Mulish-Medium rounded bg-[#e8f5fe] text-[#23b3f8] flex items-center ' ><IoMdCall size={20} className='mr-1' />Call</button>
                            <button style={{ marginLeft: '2px'}} className=' h-8 px-2 font-Mulish-Medium rounded bg-[#cafbb8] text-[#0d843b] flex items-center ' ><IoIosMail size={20} /><p className='ml-1' >Chat</p></button>
                            <div className=' ml-auto' >
                                <button>
                                    <IoIosHeartEmpty size={25} />
                                </button>
                            </div>
                        </div>
                        <p className=' font-Mulish-Bold my-2 leading-tight text-[#1da1f2] ' >3 Bedroom Semi-Detached Bungalow For Sale</p>
                        <div className=' flex ' ><IoMdPin size={30} className='mr-2' color="#36384e" />
                            <p className=' text-[#36384e] font-Mulish-Bold  ' >Lokogoma District, Abuja, Lokogoma, FCT-Abuja</p>
                        </div>
                        <div className=' flex w-full justify-between my-5 pr-8 items-center' >
                            <div className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="14" height="14" x="0" y="0" viewBox="0 0 512 512" ><g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g>
                                                <path d="M53.333,202.667h53.333c-3.285,0-6.379-1.515-8.405-4.096c-2.027-2.581-2.731-5.952-1.941-9.152l6.635-26.517     c3.563-14.272,16.341-24.235,31.04-24.235h68.672c17.643,0,32,14.357,32,32V192c0,5.888-4.779,10.667-10.667,10.667h64     c-5.888,0-10.667-4.779-10.667-10.667v-21.333c0-17.643,14.357-32,32-32h68.672c14.699,0,27.477,9.963,31.04,24.235l6.635,26.517     c0.811,3.179,0.085,6.571-1.941,9.152c-2.027,2.581-5.12,4.096-8.405,4.096h53.333c5.888,0,10.667-4.779,10.667-10.667v-64     c0-29.397-23.936-53.333-53.333-53.333H96c-29.397,0-53.333,23.936-53.333,53.333v64     C42.667,197.888,47.445,202.667,53.333,202.667z" fill="#a1abc9" data-original="#000000" />
                                                <path d="M458.667,224H53.333C23.936,224,0,247.936,0,277.333v149.333c0,5.888,4.779,10.667,10.667,10.667     s10.667-4.779,10.667-10.667v-32h469.333v32c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V277.333     C512,247.936,488.064,224,458.667,224z M490.667,373.333H21.333V352h469.333V373.333z" fill="#a1abc9" data-original="#000000"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    </g>
                                </svg>
                                <p className=' text-[#617ec2] text-sm ml-2 ' >3 Beds</p>
                            </div>
                            <div className='flex items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="14" height="14" x="0" y="0" viewBox="0 0 512 512" ><g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M484.66,461.309l-8.06-19.028c-17.218,15.087-38.093,26.095-61.107,31.495l14.787,19.245    c5.965,7.762,15.371,12.396,25.162,12.396c10.672,0,20.561-5.312,26.455-14.208C487.789,482.311,488.823,471.134,484.66,461.309z" fill="#a1abc9" data-original="#000000" />
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M35.401,442.281l-8.06,19.028c-4.162,9.826-3.129,21.003,2.764,29.899c5.893,8.896,15.783,14.208,26.455,14.208    c9.79,0,19.195-4.634,25.163-12.397l14.786-19.244C73.494,468.376,52.618,457.368,35.401,442.281z" fill="#a1abc9" data-original="#000000" />
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M183.109,60.263h-1.639c-4.049-30.259-30.015-53.679-61.364-53.679h-13.814c-34.148,0-61.931,27.782-61.931,61.931    v129.717h30.073V68.514c0-17.566,14.292-31.858,31.858-31.858h13.814c14.713,0,27.122,10.028,30.768,23.606h-2.429    c-23.922,0-43.384,19.462-43.384,43.384v25.366c0,8.042,6.319,14.59,14.26,14.997c0.259,0.013,0.514,0.039,0.776,0.039h91.359    c8.304,0,15.036-6.732,15.036-15.036v-25.365C226.493,79.725,207.031,60.263,183.109,60.263z" fill="#a1abc9" data-original="#000000" />
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M16.881,316.254v19.082c0,61.821,50.294,112.116,112.115,112.116h254.009c61.82,0,112.115-50.294,112.115-112.116v-19.082    H16.881z" fill="#a1abc9" data-original="#000000"/>
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M490.37,242.697H21.63C9.703,242.698,0,252.402,0,264.329s9.703,21.63,21.63,21.63h468.74    c11.927,0,21.63-9.703,21.63-21.63S502.297,242.697,490.37,242.697z" fill="#a1abc9" data-original="#000000"/>
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                    </g>
                                    </g>
                                </svg>
                                <p className=' ml-2 text-[#617ec2] text-sm ' >2 Bath</p>
                            </div>
                            <div className='flex items-center' >
                                <IoMdMove color='#617ec2' className='mr-1' />
                                <p className=' text-[#617ec2] text-sm ' >Bungalow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
} 