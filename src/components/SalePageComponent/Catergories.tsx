import React from 'react'

export default function Catergories() {

    const Selected = [
        {
            name: 'Property Type',
            type: 
                [
                    {
                        name: 'Houses',
                        list: ['Bungalow', 'Fully Detached Duplex', 'Semi-Detached Duplex', '2 Storey Building', '3 Storey Building', '4 Storey Building', '5 Storey Building', '6 Storey Building', 'Sky Scrapper']
                    },
                    {
                        name: 'Empty Lands',
                        list: ['250sqm', '500sqm', '750sqm']
                    },
                ], 
        },
        {
            name: 'Amenities',
            type: 
                [
                    { 
                        list: ['Swimming Pool', 'Fenced', 'Toilets/Bathroom', 'POP Ceiling', 'PVC Ceiling', 'Tiled Floor', 'Parking Space', 'Concrete Floor', 'Tiled Compound', 'Interlocked', 'Kitchen', 'Jacuzzi', 'Water Heater', 'Bore Hole', 'Elevator', 'Gateman/security']
                    }
                ], 
        }
    ]

    const [tab, setTab] = React.useState([] as any)

    const ClickHandler =(item: any)=> {
        if(tab.includes(item)){
            const index = tab.indexOf(item);
            let clone = [...tab] 
            clone.splice(index, 1)
            setTab(clone)
        } else {
            setTab([...tab, item])
        }
    }

    return (
        <div style={{ height: '78vh'}} className=' w-80 rounded-md bg-white p-6 overflow-y-auto '  >
            <div className='bg-[#1da1f2] text-white w-full rounded-md h-20 p-3 ' >
                <p className=' font-Mulish-Medium text-2xl ' >Categories</p>
            </div>
            <div className=' w-full px-3 ' >
                {Selected.map((item: any, index: any)=> {
                    return(
                        <div key={index} className='pt-4'  >
                            <button  onClick={()=> ClickHandler(index)} className=' flex items-center ' >
                                <div >
                                    <svg className={tab.includes(index) ? 'w-8 h-8' : 'rotate-90  w-8 h-8'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                        <defs>
                                            <clipPath>
                                                <path fill="#00f" fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/>
                                            </clipPath>
                                            <clipPath>
                                                <path fill="#895e59" fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/>
                                            </clipPath>
                                        </defs>
                                        <path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#895e59"/>
                                    </svg>
                                </div>
                                <p className=' text-[#895e59] font-Mulish-Medium text-lg ' >{item.name}</p>
                            </button>
                            {item.type.map((item: any, ID: any)=> {
                                return(
                                    <div className={tab.includes(index) ?'ml-8 pt-1' : 'ml-8 pt-1 hidden'}  key={index}>
                                        {item?.name && (
                                            <p className=' text-[#1da1f2] pb-1  font-Mulish-Bold text-xl ' >{item?.name}</p>
                                        )}
                                        {item.list.map((item: any, index: any)=> {
                                            return(
                                                <div key={index} className='flex items-center my-1' >
                                                    <input type='checkbox' />
                                                    <p className=' ml-2 text-sm font-Mulish-Regular  ' >{item}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 