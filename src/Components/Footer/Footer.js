import React from "react";
import './footer.css';
function Footer() {
    return (
        <>
            <div className="footer" id="footer">
                <a className="nav-link" href='#about'>About</a>
                <a className="nav-link" href='#cards'>Projects</a>
                <a className="nav-link" href='#contact'>Contact</a>
            </div>
            <div className="copyright">
                  Copyright © Yash Nehete
            </div>
        </>
    );

}
export default Footer;