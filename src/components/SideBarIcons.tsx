import React from 'react'

export default function SideBarIcons(props: any) { 

    return (
        <div className="w-auto" >
            {props.name === "Dashboard" && (
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_369_5" fill="white">
                        <rect width="11.9344" height="11.7419" rx="0.370968"/>
                    </mask>
                    <rect width="11.9344" height="11.7419" rx="0.370968" stroke={props.active === "Dashboard" ? "#58A0DF" : "white"} stroke-width="3" mask="url(#path-1-inside-1_369_5)"/>
                    <mask id="path-2-inside-2_369_5" fill="white">
                        <rect x="14.0656" width="11.9344" height="11.7419" rx="0.370968"/>
                    </mask>
                    <rect x="14.0656" width="11.9344" height="11.7419" rx="0.370968" stroke={props.active === "Dashboard" ? "#58A0DF" : "white"} stroke-width="3" mask="url(#path-2-inside-2_369_5)"/>
                    <mask id="path-3-inside-3_369_5" fill="white">
                        <rect y="14.2581" width="11.9344" height="11.7419" rx="0.370968"/>
                    </mask>
                    <rect y="14.2581" width="11.9344" height="11.7419" rx="0.370968" stroke={props.active === "Dashboard" ? "#58A0DF" : "white"} stroke-width="3" mask="url(#path-3-inside-3_369_5)"/>
                    <mask id="path-4-inside-4_369_5" fill="white">
                        <rect x="14.0656" y="14.2581" width="11.9344" height="11.7419" rx="0.370968"/>
                    </mask>
                    <rect x="14.0656" y="14.2581" width="11.9344" height="11.7419" rx="0.370968" stroke={props.active === "Dashboard" ? "#58A0DF" : "white"} stroke-width="3" mask="url(#path-4-inside-4_369_5)"/>
                </svg>
            )}
            {props.name === "Settings" && (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.403 11.8096C19.403 15.942 15.9768 19.3127 11.7246 19.3127C7.47245 19.3127 4.04623 15.942 4.04623 11.8096C4.04623 7.67716 7.47245 4.30652 11.7246 4.30652C15.9768 4.30652 19.403 7.67716 19.403 11.8096Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                    <path d="M10.3875 0.675424C10.3875 0.624113 10.4291 0.582517 10.4804 0.582517H13.6025C13.6538 0.582517 13.6954 0.624113 13.6954 0.675424V4.01962C12.6116 3.76463 11.4893 3.71616 10.3875 3.87681V0.675424Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                    <path d="M10.3873 23.3482C10.3873 23.3995 10.4289 23.4411 10.4802 23.4411H13.6022C13.6535 23.4411 13.6951 23.3995 13.6951 23.3482V20.004C12.6113 20.259 11.4891 20.3075 10.3873 20.1468V23.3482Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                    <path d="M20.7215 4.65887C20.7654 4.63235 20.8232 4.64604 20.8506 4.68945L22.4789 7.27292C22.5063 7.31633 22.4928 7.37302 22.4489 7.39954L19.5268 9.1638C19.18 8.13457 18.6352 7.17876 17.9224 6.34887L20.7215 4.65887Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                    <path d="M21.7656 17.0858C21.8072 17.1158 21.8158 17.1734 21.7849 17.2144L19.9192 19.6817C19.8893 19.7212 19.8333 19.731 19.7917 19.704L17.0785 17.9379C17.9051 17.1272 18.597 16.1951 19.1289 15.1759L21.7656 17.0858Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                    <path d="M2.90229 4.55984C2.85836 4.53332 2.80058 4.54701 2.77322 4.59042L1.13118 7.19561C1.10459 7.2378 1.11645 7.29282 1.15806 7.32026L3.85059 9.09572C4.31323 8.05901 4.93568 7.09784 5.6955 6.2463L2.90229 4.55984Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                    <path d="M1.80319 17.0434C1.76356 17.0741 1.75612 17.1302 1.78636 17.1702L3.66455 19.6541C3.69441 19.6936 3.75046 19.7034 3.792 19.6764L6.50612 17.9097C5.64875 17.0762 4.89776 16.1438 4.26978 15.1333L1.80319 17.0434Z" stroke={props.active === "Settings" ? "#58A0DF" : "white"} stroke-width="1.13128"/>
                </svg> 
            )}
            {props.name === "Feeds" && (
                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0737 19.2436C19.4295 19.2436 21.6079 19.2436 22.9605 17.8904C24.3142 16.5384 24.3142 14.3609 24.3142 10.0069C24.3142 5.653 24.3142 3.47545 22.9605 2.12344C21.6079 0.770264 19.4295 0.770264 15.0737 0.770264H10.4534C6.09767 0.770264 3.91921 0.770264 2.56663 2.12344C1.21289 3.47545 1.21289 5.653 1.21289 10.0069C1.21289 14.3609 1.21289 16.5384 2.56663 17.8904C3.32089 18.6455 4.33157 18.9792 5.83316 19.1258" stroke={props.active === "Feeds" ? "#58A0DF" : "white"} stroke-width="1.31334" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.0737 19.2436C13.6461 19.2436 12.0729 19.8209 10.6371 20.5656C8.32929 21.7629 7.17538 22.3621 6.60709 21.9799C6.03879 21.5989 6.14622 20.4155 6.36221 18.0497L6.41073 17.5117" stroke={props.active === "Feeds" ? "#58A0DF" : "white"} stroke-width="1.31334" stroke-linecap="round"/>
                </svg>
            )}
            {props.name === "User managements" && (
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.23865 8.05972H1.72729C1.4432 8.05972 1.21289 8.29003 1.21289 8.57413V19.891C1.21289 20.1751 1.4432 20.4054 1.72729 20.4054H21.2746C21.5587 20.4054 21.789 20.1751 21.789 19.891V15.7758" stroke={props.active === "User managements" ? "#58A0DF" : "white"} stroke-width="1.33277"/>
                    <mask id="path-2-inside-1_369_365" fill={props.active === "User managements" ? "#58A0DF" : "white"}>
                        <rect x="5.32812" y="0.858093" width="19.5473" height="13.3745" rx="0.823044"/>
                    </mask>
                    <rect x="5.32812" y="0.858093" width="19.5473" height="13.3745" rx="0.823044" stroke={props.active === "User managements" ? "#58A0DF" : "white"} stroke-width="2.66554" mask="url(#path-2-inside-1_369_365)"/>
                </svg>
            )}
            {props.name === "Contacts managements" && (
                <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.734409" y="1.24448" width="22.9468" height="15.6456" rx="1.56456" stroke={props.active === "Contacts managements" ? "#58A0DF" : "white"} stroke-width="1.04304"/>
                    <rect x="12.7292" y="5.9382" width="8.3443" height="1.56456" rx="0.782278" fill={props.active === "Contacts managements" ? "#58A0DF" : "white"}/>
                    <rect x="12.7292" y="9.06731" width="8.3443" height="1.56456" rx="0.782278" fill={props.active === "Contacts managements" ? "#58A0DF" : "white"}/>
                    <circle cx="5.94957" cy="6.45972" r="1.56456" fill={props.active === "Contacts managements" ? "#58A0DF" : "white"}/>
                    <path d="M3.34192 9.30988C3.34192 9.17592 3.45052 9.06731 3.58449 9.06731H8.31454C8.44851 9.06731 8.55711 9.17592 8.55711 9.30988V9.58883C8.55711 11.029 7.38965 12.1964 5.94951 12.1964C4.50938 12.1964 3.34192 11.029 3.34192 9.58883V9.30988Z" fill={props.active === "Contacts managements" ? "#58A0DF" : "white"}/>
                </svg>
            )}
            {props.name === "Departments" && (
                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2677 9.11848L16.7152 11.7739V17.1789L12.2677 20.4785L7.49066 17.1789V11.7739L12.2677 9.11848Z" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                    <path d="M10.5606 2.70787C10.5606 3.72034 11.335 4.4852 12.2229 4.4852C13.1108 4.4852 13.8852 3.72034 13.8852 2.70787C13.8852 1.69539 13.1108 0.930541 12.2229 0.930541C11.335 0.930541 10.5606 1.69539 10.5606 2.70787Z" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                    <path d="M20.2044 19.5187C20.2044 20.5312 20.9788 21.296 21.8667 21.296C22.7546 21.296 23.529 20.5312 23.529 19.5187C23.529 18.5062 22.7546 17.7414 21.8667 17.7414C20.9788 17.7414 20.2044 18.5062 20.2044 19.5187Z" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                    <path d="M0.886622 19.4244C0.886622 20.4369 1.66101 21.2017 2.54892 21.2017C3.43683 21.2017 4.21122 20.4369 4.21122 19.4244C4.21122 18.4119 3.43683 17.6471 2.54892 17.6471C1.66101 17.6471 0.886622 18.4119 0.886622 19.4244Z" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                    <line y1="-0.673789" x2="3.73503" y2="-0.673789" transform="matrix(-0.882051 -0.471155 -0.436529 0.89969 20.0098 18.9858)" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                    <line y1="-0.673789" x2="3.52242" y2="-0.673789" transform="matrix(0.850264 -0.526357 0.490137 0.871646 4.49573 19.0487)" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                    <line y1="-0.673789" x2="4.02247" y2="-0.673789" transform="matrix(0.00744566 0.999972 -0.999966 0.00819691 12.1927 5.09615)" stroke={props.active === "Departments" ? "#58A0DF" : "white"} stroke-width="1.34758"/>
                </svg>
            )}
            {props.name === "Schedule & Reports" && (
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.734409" y="0.643139" width="19.3928" height="18.5043" rx="1.56456" stroke={props.active === "Schedule & Reports" ? "#58A0DF" : "white"} stroke-width="1.04304"/>
                    <rect x="2.87842" y="3.67567" width="13.3277" height="1.77703" rx="0.888514" fill={props.active === "Schedule & Reports" ? "#58A0DF" : "white"}/>
                    <rect x="2.87842" y="7.69329" width="9.77365" height="1.56456" rx="0.782278" fill={props.active === "Schedule & Reports" ? "#58A0DF" : "white"}/>
                    <rect x="2.87842" y="11.2473" width="9.77365" height="1.56456" rx="0.782278" fill={props.active === "Schedule & Reports" ? "#58A0DF" : "white"}/>
                </svg>
            )}
            {props.name === "Inventory" && (
                <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5311 3.80946L10.6108 1.27927C9.90852 1.13021 9.24731 1.6658 9.24731 2.3837V26.2514C9.24731 26.9693 9.90852 27.5049 10.6108 27.3559L22.5311 24.8257C23.0527 24.715 23.4257 24.2545 23.4257 23.7213V4.91389C23.4257 4.38069 23.0527 3.92017 22.5311 3.80946Z" stroke={props.active === "Inventory" ? "#58A0DF" : "white"} stroke-width="1.32389"/>
                    <path d="M7.82948 3.1395H2.34192C1.71837 3.1395 1.21289 3.64498 1.21289 4.26853V24.3666C1.21289 24.9902 1.71838 25.4956 2.34192 25.4956H7.82948" stroke={props.active === "Inventory" ? "#58A0DF" : "white"} stroke-width="1.32389"/>
                    <ellipse cx="13.7916" cy="14.9809" rx="1.70868" ry="1.52317" fill={props.active === "Inventory" ? "#58A0DF" : "white"}/>
                </svg>
            )}
            {props.name === "Sales & Payments" && (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21289 1.67906V11.3348C1.21289 11.514 1.28408 11.6859 1.41079 11.8126L12.7421 23.1439C13.0059 23.4077 13.4337 23.4077 13.6976 23.1439L22.948 13.8935C23.2118 13.6296 23.2118 13.2018 22.948 12.938L11.6167 1.60669C11.49 1.47998 11.3181 1.40879 11.1389 1.40879H1.48316C1.33389 1.40879 1.21289 1.52979 1.21289 1.67906Z" stroke={props.active === "Sales & Payments" ? "#58A0DF" : "white"} stroke-width="1.32389"/>
                    <circle cx="5.41505" cy="5.61124" r="1.80104" fill={props.active === "Sales & Payments" ? "#58A0DF" : "white"}/>
                </svg>
            )}
            {props.name === "Companies" && (
                <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_369_459)">
                        <path d="M5.62231 14.5107V9.25208C5.62231 8.50487 6.22805 7.89914 6.97526 7.89914H12.6841C13.4313 7.89914 14.0371 8.50487 14.0371 9.25208V14.5107" stroke={props.active === "Companies" ? "#58A0DF" : "white"} stroke-width="1.20211"/>
                        <circle cx="9.82979" cy="10.9044" r="1.20211" fill={props.active === "Companies" ? "#58A0DF" : "white"}/>
                        <circle cx="9.82979" cy="15.7128" r="1.20211" fill={props.active === "Companies" ? "#58A0DF" : "white"}/>
                        <path d="M2.58914 14.498C-1.47465 8.67483 2.69181 0.686503 9.79281 0.686503C16.6791 0.686503 20.8876 8.24962 17.2576 14.1014L10.2245 25.4392L2.58914 14.498Z" stroke={props.active === "Companies" ? "#58A0DF" : "white"} stroke-width="1.20211"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_369_459">
                            <rect width="20.4358" height="26.4463" fill={props.active === "Companies" ? "#58A0DF" : "white"} transform="translate(0.212891 0.0854492)"/>
                        </clipPath>
                    </defs>
                </svg>
            )}
            {props.name === "Requests" && (
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3341 8.73342V4.11315C22.3341 2.65503 21.1521 1.47299 19.694 1.47299H3.85305C2.39493 1.47299 1.21289 2.65503 1.21289 4.11315V20.6141C1.21289 22.0722 2.39493 23.2543 3.85305 23.2543H9.79339" stroke={props.active === "Requests" ? "#58A0DF" : "white"} stroke-width="1.32008"/>
                    <path d="M10.4535 18.634L15.3875 21.3751C15.9641 21.6955 16.6888 21.5409 17.0846 21.0132L24.3143 11.3736" stroke={props.active === "Requests" ? "#58A0DF" : "white"} stroke-width="1.32008"/>
                    <circle cx="11.7733" cy="6.7533" r="2.64015" fill={props.active === "Requests" ? "#58A0DF" : "white"}/>
                </svg> 
            )}
            {props.name === "Messaging" && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21289 2.55639V16.5695C1.21289 17.2425 1.75845 17.7881 2.43142 17.7881H6.08702C6.76 17.7881 7.30555 18.3336 7.30555 19.0066V22.1236C7.30555 22.3477 7.55987 22.4772 7.74117 22.3454L13.687 18.0211C13.8953 17.8696 14.1462 17.7881 14.4037 17.7881H21.9279C22.6009 17.7881 23.1465 17.2425 23.1465 16.5695V2.55639C23.1465 1.88342 22.6009 1.33786 21.9279 1.33786H2.43142C1.75845 1.33786 1.21289 1.88342 1.21289 2.55639Z" stroke={props.active === "Messaging" ? "#58A0DF" : "white"} stroke-width="1.32389"/>
                </svg>
            )}
            {props.name === "Conferencing" && (
                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7384 25.75L1.65604 19.334C1.38003 19.1584 1.21289 18.8539 1.21289 18.5267V7.63725C1.21289 7.29885 1.39163 6.98562 1.68297 6.81346L11.2401 1.16609C11.5464 0.985064 11.9279 0.988994 12.2305 1.1763L21.3322 6.81068C21.6139 6.9851 21.7854 7.29289 21.7854 7.62426V12.8324" stroke={props.active === "Conferencing" ? "#58A0DF" : "white"} stroke-width="1.32389"/>
                    <path d="M12.6952 20.2823L16.7825 22.553C17.2602 22.8184 17.8605 22.6904 18.1884 22.2532L24.1775 14.2677" stroke={props.active === "Conferencing" ? "#58A0DF" : "white"} stroke-width="1.32389"/>
                </svg> 
            )} 
        </div>
    )
} 