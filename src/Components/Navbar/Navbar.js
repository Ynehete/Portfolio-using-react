import React from 'react';
import './navbar.css'
function Navbar() {
    return (
        <>
            <div className='navbar'>
                <h3 className='name'>Yash Nehete</h3>
                <div className='nav-links'>
                    <a className='nav-link' href='#about'>About</a>
                    <a className='nav-link' href='#cards'>Projects</a>
                    <a className='nav-link' href='#contact'>Contact</a>
                </div>

            </div>
        </>
    );
}
export default Navbar;