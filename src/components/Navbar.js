import React from 'react';
import { ScrollTo } from 'react-scroll-to';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar-component">

            <div className="nav-container">
                <Link to="/work" className="">Work</Link>
                <Link to="/about" className="">About</Link>
                <Link to="/contact" className="">Contact</Link>
            </div>

        </div>
    )
}
