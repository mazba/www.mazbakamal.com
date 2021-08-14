import React from 'react';
import content from '../content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Stack(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-dosis bg-gradient-to-r from-green-200 to-blue-300" id="stack">
                <h1 className='text-5xl font-bold text-center hidden md:block'>{content.stack.md_header}</h1>
                <h1 className='text-5xl font-bold text-center md:hidden'>{content.stack.sm_header}</h1>
                <div className='flex flex-wrap justified-center mt-10'>
                    {content.stack.tech.map((tech,index)=>{
                        return (
                          <span className='w-40 h-40 bg-white m-2 shadow-2xl rounded-full flex items-center p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                              <LazyLoadImage src={tech.img} alt={tech.alt} />
                          </span>
                        );
                    })};
                </div>
                <p className='w-11/12 md:max-w-xl text-xl text-center mt-10'>{content.stack.desc}</p>
        </div>
    )
}