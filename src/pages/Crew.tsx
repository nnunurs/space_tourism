import React, { useState, useEffect } from 'react'
import "./Crew.css"
import data from "../assets/data.json"

export default function Crew() {
    const [member, setMember] = useState("Douglas Hurley")
    const [memberData, setMemberData] = useState(JSON.parse("{}"))

    useEffect(() => {
        const tempData: any= data.crew.find((item: any) => item.name === member)
        setMemberData(tempData)
    }, [member])
    
    function getName(e: React.MouseEvent) {
        const item = e.target as HTMLElement
        const text = item.id
        setMember(text)
    }

    return (
        <div className='crew'>
            <div className="crew-desc">
                <div className="crew-text">
                    <div className="caption"><span className='number'>02</span>MEET YOUR CREW</div>
                    <div className="crew-role">{memberData.role}</div>
                    <div className="crew-name">{memberData.name}</div>
                    <div className="crew-bio">{memberData.bio}</div>
                </div>
                <div className="nav-dots">
                    {data.crew.map((item: any) => {
                        if (item.name === member) return <div className="dot active" onClick={(e) => getName(e)} id={item.name}></div>
                        return <div className="dot" onClick={(e) => getName(e)} id={item.name}></div>})}
                </div>
            </div>
            <div className="img-container">
                <img src={`${process.env.PUBLIC_URL}/assets/crew/image-${member.split(" ")[0].toLowerCase()}-${member.split(" ")[1].toLowerCase()}.webp`} alt="" className="crew-img" />
            </div>
        </div>
    )
}
