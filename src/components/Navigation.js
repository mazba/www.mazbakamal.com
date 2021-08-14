import React from "react";
import content from '../content';
import {Link as ScrollLink} from 'react-scroll';

export default function Navigation() {
    return (
        <div
        style={{
            background: '#040305'
        }}
        >
            <div className="flex item-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
                <h1 className="text-2xl font-bold"><span>Md</span><span className="animate-ping mx-1 h-1 w-1 inline-block bg-red-600 rounded-full"></span>{content.nav.logo}</h1>
                <div>
                    {content.nav.links.map((link,index)=>{
                        return <ScrollLink to={link.to} smooth={true}><span key={index} className="text-xl mr-4 cursor-pointer">{link.text}</span></ScrollLink>
                    })}
                </div>
            </div>
        </div>
    );
}