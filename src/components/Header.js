import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CatLogo } from '../CatwikiLogo.svg'

export const Header = () => {
    return (
        <div className="container mx-auto text-white py-8">
            <Link to="/">
                <CatLogo />

            </Link>
        </div>
    )
}
