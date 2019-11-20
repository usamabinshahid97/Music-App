import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className="topnav">
            <span className="logo-text">Music.</span>
            <div className="nav-links">
                <input type="text" placeholder="Search.." name="search" />
                <div className="links">
                    <a className="active" href="#sign-in"><span className="text">Sign in</span></a>
                    <a href="#sign-up"><span className="text"><b>Sign up</b></span></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar