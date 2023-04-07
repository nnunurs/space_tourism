import React from 'react';
import "./Navbar.css"
import logo from "../assets/shared/logo.svg"
import { NavLink } from "react-router-dom"

import defaultBg from "../assets/home/background-home-desktop.jpg"
import destBg from "../assets/destination/background-destination-desktop.jpg"
import crewBg from "../assets/crew/background-crew-desktop.jpg"

export default function Navbar(props: { changeBg: (arg0: string) => any}) {
    return (
        <div className='navbar'>
            <img className="logo" src={logo} alt="" />
            <div className="line"></div>
            <div className="blur"></div>
            <nav>
                <ul className='navlinks'>
                    <li><NavLink to="" onClick={() => props.changeBg(defaultBg)} className={({ isActive }) => (isActive ? "active" : "")}><span className='bold'>00</span> HOME</NavLink></li>
                    <li><NavLink to="dest" onClick={() => props.changeBg(destBg)} className={({ isActive }) => (isActive ? "active" : "")}><span className='bold'>01</span> DESTINATION</NavLink></li>
                    <li><NavLink to="crew" onClick={() => props.changeBg(crewBg)} className={({ isActive }) => (isActive ? "active" : "")}><span className='bold'>02</span> CREW</NavLink></li>
                    <li><NavLink to="tech" className={({ isActive }) => (isActive ? "active" : "")}><span className='bold'>03</span> TECHNOLOGY</NavLink></li>
                </ul>
            </nav>
        </div >
    )
}