import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import StatsComponent from '../components/StatsComponent' 
import Feeds from '../components/Feeds' 
import { useDisclosure } from '@chakra-ui/hooks';
// import {  } from '@chakra-ui/react';
import { InputGroup, InputLeftElement, Input, Drawer, DrawerContent,DrawerCloseButton } from '@chakra-ui/react'

export default function HomePage() {
    
    const { isOpen, onOpen, onClose } = useDisclosure(); 

    return (
        <div className=' w-full h-screen flex overflow-hidden  ' >
            <div className=' lg:flex bg-[#404690] hidden w-fit overflow-y-auto h-full ' >
                <SideBar close={onClose} />
            </div>  
            <div className=' lg:hidden flex' >
                <Drawer 
                    size='xs'
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}  > 
                    <DrawerContent>
                        <div className=' bg-[#404690] overflow-y-auto h-full ' > 
                            <SideBar close={onClose} />
                        </div> 
                        {/* <SideBar close={onClose}  />  */}
                    </DrawerContent>
                </Drawer>
            </div>
            <div className=' w-full flex flex-1 flex-col overflow-y-auto h-full lg:px-8' >
                <div className=' lg:h-auto w-full' >
                    <NavBar open={onOpen} />
                </div>
                <div className=' flex lg:hidden w-full py-4 md:w-461px px-4 lg:px-0 lg:w-461px ' >
                    <InputGroup >
                        <InputLeftElement 
                        children={ 
                            <svg className='ml-4 mt-1'  width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.25395" cy="8.24425" r="7.63166" stroke="black" stroke-width="0.526321"/>
                                <line x1="13.5215" y1="13.7223" x2="22.8517" y2="22.3349" stroke="black" stroke-width="0.717711"/>
                            </svg>
                        }
                        />
                        <Input className=' font-Nunito-Medium ' borderRadius='10px' background='#F0F0F0' size='lg' fontSize='17px' placeholder="Search" /> 
                    </InputGroup>
                </div >  
                <div className='w-full px-4 lg:px-0 ' >
                    <StatsComponent />
                </div>
                <div className='w-full mt-10 px-4 lg:px-0 ' >
                    <Feeds />
                </div>
            </div>
        </div>
    )
} 