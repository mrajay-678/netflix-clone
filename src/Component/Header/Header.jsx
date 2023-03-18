import React from 'react'
import logo from '../../logo.png'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
    return (
        <>
            <div className='header w-100'>
                <div className='d-flex mobile-menu justify-content-between '><img src={logo} alt="" srcSet="" /> <div className='d-md-none'><ImSearch/></div> </div>
                <div className='navigate-link'>
                    <Link to="" >Tv Show</Link>
                    <Link to="" >Movies</Link>
                    <Link to="" >Recently Added</Link>
                    <Link to="" >List</Link>
                    <Link to="/Counter" >Counter</Link>
                </div>
                <div className=' d-none d-md-block'><ImSearch/></div>
                
            </div>
        </>
    )
}

export default Header
