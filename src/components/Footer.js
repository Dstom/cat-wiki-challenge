import React from 'react'
import CatLogoBlanco from '../CatwikiLogoWhitey.svg'

export const Footer = () => {
    return (
        <div className=" container mx-auto
        bg-black rounded-t-3xl   
        pl-8 lg:pl-28 pr-8 py-10
        md:flex items-center justify-between">
            <img src={CatLogoBlanco} className="mb-5 md:mb-0" alt="catLogo" />
            <p className="text-white">© created by Dstom - devChallenge.io 2021</p>
        </div>
    )
}
