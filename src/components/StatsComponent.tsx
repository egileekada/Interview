import React from 'react'

export default function StatsComponent() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4' >
            <div className=' w-full h-32 bg-[#E8E9EB] rounded-lg flex items-center relative' >
                <svg className=' absolute top-0 left-0' width="48" height="90" viewBox="0 0 48 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <ellipse cx="9.1453" cy="12.8035" rx="38.4104" ry="44.9951" fill="#58A0DF"/>
                        <g filter="url(#filter0_b_369_508)">
                            <ellipse cx="-12.8034" cy="44.2635" rx="38.4104" ry="44.9951" fill="#404690"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_b_369_508" x="-114.865" y="-64.3832" width="204.124" height="217.293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="31.8258"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_369_508"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_369_508" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className=' w-full flex justify-between text-lg items-center px-8' > 
                    <p className=' font-Nunito-SemiBold text-[#242966] ' >Products<br/><span className=' font-Nunito-Bold ' >3</span></p>
                    <svg width="91" height="78" viewBox="0 0 91 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_369_512)">
                            <ellipse cx="45.7805" cy="57.0594" rx="36.2156" ry="11.6728" fill="#D9D9D9"/>
                        </g>
                        <path d="M44.9415 64.6268V39.0254L65.4016 27.6305V53.6759L44.9415 64.6268Z" fill="#58A0DF" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M44.6612 19.0822L24.4814 29.0319L45.2218 38.9817L65.4016 27.4904L44.6612 19.0822Z" fill="#D9D9D9" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M44.9416 38.9817L44.8015 64.6269L24.3414 54.3969V29.3123L44.9416 38.9817Z" fill="#58A0DF" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M15.5127 34.0769L24.4815 29.032L44.5212 38.9817L34.8517 44.0267L15.5127 34.0769Z" fill="#D2D2D2" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M45.0813 19.0821L24.6213 28.8917L15.2321 23.9869L34.9914 14.1773L45.0813 19.0821Z" fill="#D2D2D2" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M65.5417 27.4904L44.9415 38.9816L54.7512 44.447L74.3704 33.6564L65.5417 27.4904Z" fill="#D2D2D2" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M44.8016 18.942L65.5419 27.4904L73.67 19.6427L54.7514 12.2154L44.8016 18.942Z" fill="#D2D2D2" stroke="#525252" stroke-width="0.280275"/>
                        <path d="M37.1907 6.85704C36.7937 5.66615 37.6801 4.43634 38.9354 4.43634C40.1814 4.43634 41.0668 5.64926 40.687 6.83598L38.9194 12.36V12.0431L37.1907 6.85704Z" fill="#58A0DF"/>
                        <path d="M41.4023 2.37587C41.1164 1.51843 41.7547 0.632965 42.6585 0.632965C43.5556 0.632965 44.1931 1.50627 43.9196 2.3607L42.6469 6.338V6.1098L41.4023 2.37587Z" fill="#58A0DF"/>
                        <path d="M34.2518 5.64669C34.0534 5.05125 34.4966 4.43634 35.1242 4.43634C35.7472 4.43634 36.1899 5.0428 36 5.63616L35.1162 8.39817V8.2397L34.2518 5.64669Z" fill="#58A0DF"/>
                        <path d="M41.144 10.4757C40.9853 9.99931 41.3398 9.50739 41.8419 9.50739C42.3403 9.50739 42.6945 9.99255 42.5426 10.4672L41.8355 12.6769V12.5501L41.144 10.4757Z" fill="#58A0DF"/>
                        <path d="M46.6995 8.1248C46.3025 6.93391 47.1889 5.7041 48.4442 5.7041C49.6902 5.7041 50.5756 6.91702 50.1958 8.10374L48.4282 13.6278V13.3108L46.6995 8.1248Z" fill="#58A0DF"/>
                        <path d="M50.9107 3.64363C50.6249 2.78619 51.2631 1.90073 52.1669 1.90073C53.064 1.90073 53.7015 2.77403 53.4281 3.62846L52.1553 7.60576V7.37756L50.9107 3.64363Z" fill="#58A0DF"/>
                        <path d="M43.7603 6.91445C43.5618 6.31901 44.005 5.7041 44.6326 5.7041C45.2556 5.7041 45.6983 6.31056 45.5084 6.90392L44.6246 9.66593V9.50746L43.7603 6.91445Z" fill="#58A0DF"/>
                        <path d="M50.6525 11.7435C50.4937 11.2672 50.8482 10.7753 51.3504 10.7753C51.8488 10.7753 52.2029 11.2604 52.051 11.7351L51.3439 13.9447V13.818L50.6525 11.7435Z" fill="#58A0DF"/>
                        <defs>
                            <filter id="filter0_f_369_512" x="0.58588" y="36.4075" width="90.3893" height="41.3037" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="4.48953" result="effect1_foregroundBlur_369_512"/>
                            </filter>
                        </defs>
                    </svg> 
                </div>
            </div>
            <div className=' w-full h-32 bg-[#E8E9EB] rounded-lg flex items-center relative' >
                <svg className=' absolute top-0 left-0' width="48" height="90" viewBox="0 0 48 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <ellipse cx="9.1453" cy="12.8035" rx="38.4104" ry="44.9951" fill="#58A0DF"/>
                        <g filter="url(#filter0_b_369_508)">
                            <ellipse cx="-12.8034" cy="44.2635" rx="38.4104" ry="44.9951" fill="#404690"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_b_369_508" x="-114.865" y="-64.3832" width="204.124" height="217.293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="31.8258"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_369_508"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_369_508" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className=' w-full flex justify-between text-lg items-center px-8' >
                    <p className=' font-Nunito-SemiBold text-[#242966] ' >Sales<br/><span className=' font-Nunito-Bold ' >₦16,345.00</span></p>
                    <svg width="83" height="60" viewBox="0 0 83 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_369_491)">
                            <ellipse cx="41.3596" cy="40.4325" rx="32.9232" ry="10.6116" fill="#D9D9D9"/>
                        </g>
                        <path d="M21.6095 30.4174L19.5134 29.3693L19.6881 40.8978L24.7536 40.7231V27.4479L21.6095 30.4174Z" fill="#58A0DF"/>
                        <path d="M31.3912 13.8235L19.5134 25.1772L21.6095 27.448L31.3912 18.1903L40.4742 26.924L60.2123 7.7099L64.0551 11.2034V0.897644H53.5747L57.4175 5.61382L40.4742 22.2078L31.3912 13.8235Z" fill="#58A0DF"/>
                        <path d="M31.0419 20.9851L27.1991 24.4786V40.5485H32.2646L32.4393 22.0331L31.0419 20.9851Z" fill="#58A0DF"/>
                        <path d="M35.0594 40.7232V24.6533L39.7756 29.0201V40.7232H35.0594Z" fill="#58A0DF"/>
                        <path d="M47.6357 22.7318L42.7449 27.448V40.7232L47.6357 40.3738V22.7318Z" fill="#58A0DF"/>
                        <path d="M55.3214 15.2209L50.6052 19.7624V40.7232H55.4961L55.3214 15.2209Z" fill="#58A0DF"/>
                        <path d="M59.8631 10.6793L58.291 12.2514L58.1163 40.7231H63.0072V13.6488L59.8631 10.6793Z" fill="#58A0DF"/>
                        <defs>
                            <filter id="filter0_f_369_491" x="0.273617" y="21.6581" width="82.172" height="37.5488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="4.08139" result="effect1_foregroundBlur_369_491"/>
                            </filter>
                        </defs>
                    </svg> 
                </div>
            </div>
            <div className=' w-full h-32 bg-[#E8E9EB] rounded-lg flex items-center relative' >
                <svg className=' absolute top-0 left-0' width="48" height="90" viewBox="0 0 48 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <ellipse cx="9.1453" cy="12.8035" rx="38.4104" ry="44.9951" fill="#58A0DF"/>
                        <g filter="url(#filter0_b_369_508)">
                            <ellipse cx="-12.8034" cy="44.2635" rx="38.4104" ry="44.9951" fill="#404690"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_b_369_508" x="-114.865" y="-64.3832" width="204.124" height="217.293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="31.8258"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_369_508"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_369_508" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className=' w-full flex justify-between text-lg items-center px-8' >
                    <p className=' font-Nunito-SemiBold text-[#242966] ' >Posts<br/><span className=' font-Nunito-Bold ' >177</span></p>
                    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5401 4.89117H2.82265C1.62928 4.89117 0.661865 5.85859 0.661865 7.05196V37.303C0.661865 38.4963 1.62928 39.4637 2.82265 39.4637H21.1893H33.0737C34.267 39.4637 35.2344 38.4963 35.2344 37.303V22.1775C35.2344 20.9841 34.267 20.0167 33.0737 20.0167H32.9256C31.7323 20.0167 30.7648 20.9841 30.7648 22.1775V34.0844C30.7648 35.2863 29.7842 36.2571 28.5824 36.2451L6.26422 36.0219C5.07934 36.0101 4.12504 35.0462 4.12504 33.8613V10.1896C4.12504 8.99618 5.09246 8.02876 6.28583 8.02876H18.5401C19.4066 8.02876 20.1089 7.32639 20.1089 6.45997C20.1089 5.59355 19.4066 4.89117 18.5401 4.89117Z" fill="#58A0DF"/>
                        <rect x="8.65356" y="14.955" width="17.5823" height="3.72957" rx="1.86479" fill="#58A0DF"/>
                        <rect x="24.105" y="7.49579" width="17.0495" height="3.19678" rx="1.59839" fill="#58A0DF"/>
                        <rect x="31.1797" y="17.9204" width="17.2863" height="3.63535" rx="1.81767" transform="rotate(-90.8854 31.1797 17.9204)" fill="#58A0DF"/>
                        <rect x="8.65356" y="20.2829" width="17.5823" height="3.19678" rx="1.59839" fill="#58A0DF"/>
                        <rect x="8.65356" y="25.0781" width="13.3199" height="3.19678" rx="1.59839" fill="#58A0DF"/>
                    </svg>
                </div>
            </div>
            <div className=' w-full h-32 bg-[#E8E9EB] rounded-lg flex items-center relative' >
                <svg className=' absolute top-0 left-0' width="48" height="90" viewBox="0 0 48 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <ellipse cx="9.1453" cy="12.8035" rx="38.4104" ry="44.9951" fill="#58A0DF"/>
                        <g filter="url(#filter0_b_369_508)">
                            <ellipse cx="-12.8034" cy="44.2635" rx="38.4104" ry="44.9951" fill="#404690"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_b_369_508" x="-114.865" y="-64.3832" width="204.124" height="217.293" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImage" stdDeviation="31.8258"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_369_508"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_369_508" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className=' w-full flex justify-between text-lg items-center px-8' >
                    <p className=' font-Nunito-SemiBold text-[#242966] ' >Users<br/><span className=' font-Nunito-Bold ' >107</span></p>
                    <svg width="72" height="50" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_487_197)">
                            <ellipse cx="36.2289" cy="33.5418" rx="28.5609" ry="9.20559" fill="#D9D9D9"/>
                        </g>
                        <g clip-path="url(#clip0_487_197)">
                            <path d="M35.3216 18.7842C38.2044 18.7842 40.4465 16.4352 40.4465 13.5524C40.4465 10.6697 38.0976 8.42749 35.2148 8.42749C32.332 8.42749 30.0898 10.7764 30.0898 13.5524C30.0898 16.4352 32.4388 18.7842 35.3216 18.7842ZM35.2148 10.5629C35.3216 10.5629 35.3216 10.5629 35.2148 10.5629C36.9231 10.5629 38.3111 11.9509 38.3111 13.6592C38.3111 15.3675 36.9231 16.6488 35.2148 16.6488C33.5065 16.6488 32.2252 15.2608 32.2252 13.6592C32.2252 11.9509 33.6132 10.5629 35.2148 10.5629Z" fill="#58A0DF"/>
                            <path d="M51.1234 18.1436C49.0948 16.3285 46.4256 15.3676 43.6496 15.4744H42.7954C42.5819 16.3285 42.2616 17.0759 41.8345 17.7165C42.4751 17.6098 43.0089 17.6098 43.6496 17.6098C45.6782 17.503 47.7068 18.1436 49.3084 19.3181V27.0055H51.4438V18.4639L51.1234 18.1436Z" fill="#58A0DF"/>
                            <path d="M41.1938 8.641C41.7276 7.35976 43.2224 6.71914 44.6104 7.25299C45.8916 7.78684 46.5322 9.28162 45.9984 10.6696C45.5713 11.6306 44.6104 12.2712 43.6495 12.2712C43.4359 12.2712 43.1156 12.2712 42.9021 12.1644C43.0088 12.6983 43.0088 13.2321 43.0088 13.6592V14.2998C43.2224 14.2998 43.4359 14.4066 43.6495 14.4066C46.3187 14.4066 48.4541 12.2712 48.4541 9.70869C48.4541 7.03945 46.3187 4.90405 43.7562 4.90405C42.0479 4.90405 40.5531 5.75821 39.699 7.25299C40.2328 7.5733 40.7667 8.00038 41.1938 8.641Z" fill="#58A0DF"/>
                            <path d="M29.0216 17.8233C28.5946 17.1827 28.2742 16.4353 28.0607 15.5811H27.2066C24.4305 15.4743 21.7613 16.4353 19.7327 18.1436L19.4124 18.4639V27.0055H21.5477V19.3181C23.2561 18.1436 25.1779 17.503 27.2066 17.6097C27.8472 17.6097 28.4878 17.7165 29.0216 17.8233Z" fill="#58A0DF"/>
                            <path d="M27.2064 14.2998C27.42 14.2998 27.6335 14.2998 27.847 14.1931V13.5524C27.847 13.0186 27.847 12.4847 27.9538 12.0577C27.7403 12.1644 27.42 12.1644 27.2064 12.1644C25.8184 12.1644 24.6439 10.99 24.6439 9.60195C24.6439 8.21394 25.8184 7.03948 27.2064 7.03948C28.2741 7.03948 29.235 7.6801 29.6621 8.64102C30.0892 8.10718 30.7298 7.57333 31.2637 7.14625C29.8757 4.90408 26.9929 4.15669 24.7507 5.5447C22.5085 6.93271 21.7612 9.81549 23.1492 12.0577C24.0033 13.4457 25.4981 14.2998 27.2064 14.2998Z" fill="#58A0DF"/>
                            <path d="M44.0764 24.5498L43.8629 24.2295C41.7275 21.8805 38.7379 20.4925 35.5348 20.5993C32.3317 20.4925 29.2354 21.8805 27.1 24.2295L26.8865 24.5498V32.6643C26.8865 33.6252 27.6339 34.4794 28.7016 34.4794H42.3681C43.329 34.4794 44.1832 33.6252 44.1832 32.6643V24.5498H44.0764ZM41.941 32.344H29.0219V25.2972C30.7302 23.5888 33.0791 22.7347 35.5348 22.7347C37.8838 22.6279 40.2327 23.5888 41.941 25.2972V32.344Z" fill="#58A0DF"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_487_197" x="0.586747" y="17.255" width="71.2843" height="32.5736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="3.54061" result="effect1_foregroundBlur_487_197"/>
                            </filter>
                            <clipPath id="clip0_487_197">
                                <rect width="38.4371" height="38.4371" fill="white" transform="translate(16.2095 0.312988)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
} 