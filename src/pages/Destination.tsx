import React, { useEffect } from 'react'
import "./Destination.css"
import { useState } from 'react'
import data from "../assets/data.json"

export default function Destination() {
    const [planet, setplanet] = useState("moon")
    const [planetData, setPlanetData] = useState(JSON.parse("{}"))

    function getName(e: React.MouseEvent) {
        const item = e.target as HTMLElement
        const text = item.innerText.toLowerCase()
        setplanet(text)
    }

    function capitilize(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    useEffect(() => {
        const tempData: any= data.destinations.find((item: any) => item.name === capitilize(planet))
        setPlanetData(tempData)
    }, [planet])

    return (
        <div className='destination'>
            <div className="planet">
                <div className="caption"><span className='number'>01</span>PICK YOUR DESTINATION</div>
                <img src={`${process.env.PUBLIC_URL}/assets/destination/image-${planet}.webp`} alt="" className='dest-img'/>
            </div>
            <div className="dest-info">
                <ul className="planets-chooser">
                    {data.destinations.map((item: any) => {
                        if (item.name === capitilize(planet)) return <li className="active" onClick={(e) => getName(e)}>{item.name}</li>
                        return <li onClick={(e) => getName(e)}>{item.name}</li>
                        })}
                </ul>
                <div className="title">{planet}</div>
                <div className="body">{planetData.description}</div>
                <div className="info-line"></div>
                <div className="dist">
                    <div className="avg">
                        <div className="cap">AVG. DISTANCE</div>
                        <div className="num">{planetData.distance}</div>
                    </div>
                    <div className="est">
                        <div className="cap">Est. travel time</div>
                        <div className="num">{planetData.travel}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
