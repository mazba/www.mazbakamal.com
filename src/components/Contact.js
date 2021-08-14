import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import content from "../content";

export default function Contact(){
    return (
        <div
            style={{
                background: '#040305'
            }}
            className="min-h-screen flex items-center justify-center text-white" id="contact">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-2/5 -mt-64 md:-mt-1" >
                    <LazyLoadImage src={content.header.img} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}/>
                </div>
                <div className="font-dosis text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10">
                        {content.contact.title}
                    </h2>
                    <p>Pop me an email at <a href="mailto:mazba.cse@gmail.com" className="font-bold">mazba.cse@gmail.com</a> or give me a shout on social media</p>
                    <div className='mt-10'>
                        <a
                            className="inline-flex items-center justify-center w-10 h-10 mr-2 bg-gradient-to-r from-green-200 to-blue-300 hover:from-pink-500 hover:to-yellow-500 rounded-full focus:shadow-outline hover:bg-indigo-800 cursor-pointer">
                            <svg viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                            </svg>
                        </a>
                        <a
                            className="inline-flex items-center justify-center w-10 h-10 mr-2 bg-gradient-to-r from-green-200 to-blue-300 hover:from-pink-500 hover:to-yellow-500 rounded-full focus:shadow-outline hover:bg-indigo-800 cursor-pointer">
                            <svg viewBox="0 0 48 48" width="24px" height="24px">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/>
                            </svg>
                        </a>
                        <a href="#" title="Twitter"
                            className="inline-flex items-center justify-center w-10 h-10 mr-2 bg-gradient-to-r from-green-200 to-blue-300 hover:from-pink-500 hover:to-yellow-500 rounded-full focus:shadow-outline hover:bg-indigo-800 cursor-pointer">
                            <svg viewBox="0 0 48 48" width="24px" height="24px">
                                <linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient>
                                <path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/>
                            </svg>
                        </a>
                        <a
                            className="inline-flex items-center justify-center w-10 h-10 mr-2 bg-gradient-to-r from-green-200 to-blue-300 hover:from-pink-500 hover:to-yellow-500 rounded-full focus:shadow-outline hover:bg-indigo-800 cursor-pointer">
                            <svg viewBox="0 0 48 48" width="24px" height="24px">
                                <path fill="#607D8B" d="M9 28H12V42H9z"/><path fill="#607D8B" d="M9 39H35V42H9z"/><path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z"/><path fill="#A68A6E" d="M14.88 29H28.880000000000003V32H14.88z" transform="rotate(6.142 21.88 30.5)"/><path fill="#EF6C00" d="M29.452 11.646H43.451V14.647H29.452z" transform="rotate(81.234 36.453 13.148)"/><path fill="#FF9800" d="M23.576 13.578H37.574V16.579H23.576z" transform="rotate(60.79 30.576 15.079)"/><path fill="#D38B28" d="M18.395 18.275H32.393V21.276H18.395z" transform="rotate(34.765 25.396 19.777)"/><path fill="#C09553" d="M15.977 23.499H29.976V26.5H15.977z" transform="rotate(19.785 22.978 25.003)"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}