import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
    return (
        <>
            <nav className='header'>
                <img src={logo} alt="" srcSet="" />
                <div className='navigate-link'>
                    <Link to="" >Tv Show</Link>
                    <Link to="" >Movies</Link>
                    <Link to="" >Recently Added</Link>
                    <Link to="" >List</Link>
                </div>
                <ImSearch/>
            </nav>
        </>
    )
}

export default Header
