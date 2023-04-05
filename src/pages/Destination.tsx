import React from 'react'
import "./Destination.css"
import moon from "../assets/destination/image-moon.webp"
import { useState } from 'react'

export default function Destination() {
    const [planet, setplanet] = useState("moon")

    function getName(e: React.MouseEvent) {
        const item = e.target as HTMLElement

        const text = item.innerText.toLowerCase()
        setplanet(text)
    }

    return (
        <div className='destination'>
            <div className="planet">
                <div className="caption"><span className='number'>01</span>PICK YOUR DESTINATION</div>
                <img src={moon} alt="" />
            </div>
            <div className="info">
                <ul className="planets-chooser">
                    <li onClick={(e) => getName(e)}>MOON</li>
                    <li onClick={(e) => getName(e)}>MARS</li>
                    <li onClick={(e) => getName(e)}>EUROPA</li>
                    <li onClick={(e) => getName(e)}>TITAN</li>
                </ul>
                <div className="title">{planet}</div>
                <div className="body">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</div>
                <div className="info-line"></div>
                <div className="dist">
                    <div className="avg">
                        <div className="cap">AVG. DISTANCE</div>
                        <div className="num">384,400 KM</div>
                    </div>
                    <div className="est">
                        <div className="cap">Est. travel time</div>
                        <div className="num">3 DAYS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
