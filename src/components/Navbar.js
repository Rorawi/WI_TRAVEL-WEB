import React,{useEffect} from 'react';
import './navbar.css';
import './ParentStyle.css'
// import  './index.js'

const Navbar = () => {
const toggleDark=()=> {
    const divChangeTheme = document.querySelector(".div_change-theme")
    console.log(divChangeTheme);
     document.body.classList.toggle("dark-theme")
}
    return (
        <div>
            <header className="header" id="header" >
        <nav className="nav container">
            <a href="codingsnow.html" className="nav_logo">
                WI_TRAVEL
                {/* <!--A home icon should be here--> */}
                    <i className='bx bx-home'></i>
               
            </a>
            <div className="nav_menu">
                <ul className="nav_list">

                    <li className="nav_item">
                        <a href="#home" className="nav_link active-link">
                            {/* <!--home icon here--> */}
                            <i className='bx bx-home'></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#explore" className="nav_link">
                            {/* <!--home icon here--> */}
                            <i className='bx bxs-bullseye'></i>
                                <span>Explore</span>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#popular" className="nav_link">
                            {/* <!--home icon here--> */}
                            <i className='bx bxs-plane' ></i>
                            <span>Travel</span>
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#food" className="nav_link">
                            {/* <!--home icon here--> */}
                            <i className='bx bxs-bowl-rice' ></i>
                            <span>Food</span>
                        </a>
                    </li>
                   

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            {/* <!--home icon here--> */}
                            <i className='bx bxs-phone-call' ></i>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="div_change-theme" onClick={toggleDark}></div>

            <i className="bx bx-moon change-theme" id="theme-button"></i>
        </nav>
    </header>
        </div>
    );
}

export default Navbar;
