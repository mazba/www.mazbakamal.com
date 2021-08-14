import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical';
import {Link as ScrollLink} from 'react-scroll';
import content from '../content';

export default function Header(){
    return <div
        style={{
            background: '#040305'
        }}
        className="min-h-screen flex items-center justify-center text-white" id="home">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="w-full md:w-2/5 -mt-64 md:-mt-1" >
                    <LazyLoadImage src={content.header.img} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}/>
                </div>
                <div className="font-dosis text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Hi, I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500">Mazba Kamal</span>
                        <br/>
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold mb-5">
                        Welcome to my digital playground
                    </h3>
                    <h1 className="font-bold text-2xl text-gray-500">
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            wrapper="p"
                            className="inline-block"
                        />
                    </h1>
                    <ScrollLink to="stack" smooth={true}>
                        <button className="px-6 py-2 mt-10 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-bounce">
                            {content.header.btnText}
                        </button>
                    </ScrollLink>
                </div>
            </div>
           </div>
}