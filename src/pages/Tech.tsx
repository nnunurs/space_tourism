import React, { useEffect, useState } from 'react'
import data from "../assets/data.json"
import "./Tech.css"

export default function Tech() {
  const [tech, setTech] = useState("Launch vehicle")
  const [techdata, setTechdata] = useState(JSON.parse("{\"images\": {\"portrait\": \"/assets/technology/image-launch-vehicle-portrait.png\"}}"))

  useEffect(() => {
    const tempData: any = data.technology.find((item: any) => item.name === tech)
    setTechdata(tempData)
  }, [tech])

  function getName(e: React.MouseEvent) {
    const item = e.target as HTMLElement
    const text = item.id
    setTech(text)
  }

  return (
    <div className='tech'>
      <div className="caption tech-caption"><span className='number'>03</span>SPACE LAUNCH 101</div>
      <div className="tech-cols">
        <div className="tech-text">
          <div className="tech-col1">
            <div className="selector">
              {data.technology.map((item: any, index: number) => {
              if (item.name === tech) return <div className="circle-nav active" onClick={(e) => getName(e)} id={item.name}>{index + 1}</div>
              return <div className="circle-nav" onClick={(e) => getName(e)} id={item.name}>{index + 1}</div>})}
            </div>
          </div>
          <div className="tech-col2">
            <div className="tech-term">The terminology...</div>
            <div className="tech-name">{techdata.name}</div>
            <div className="tech-info">{techdata.description}</div>
          </div>
        </div>
        <img src={`${process.env.PUBLIC_URL}${techdata.images.portrait.slice(1)}`} alt="" className='tech-img'/>
      </div>
    </div>
  )
}
