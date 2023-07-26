import React from 'react'
import One1 from "../../Resources/11.svg"
import Two2 from "../../Resources/12.svg"
import Three from "../../Resources/13.svg"
import Four from "../../Resources/14.svg"
import Five from "../../Resources/15.svg"
import Six from "../../Resources/16.svg"
import Seven from "../../Resources/17.svg"
import Eight from "../../Resources/18.svg"
import Nine from "../../Resources/19.svg"
import Ten from "../../Resources/20.svg"

const Two = () => {
  return (
    <div>
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
            <li><img style={{width: 50, height: 30}} src={One1} alt=""/>Translation</li><br/>
            <li><img style={{width: 50, height: 30}} src={Two2} alt=""/>Research</li><br/>
            <li><img style={{width: 50, height: 30}} src={Three} alt=""/>Linux</li><br/>
            <li><img style={{width: 50, height: 30}} src={Four} alt=""/>Article Writing</li><br/>
            <li><img style={{width: 50, height: 30}} src={Five} alt=""/>Web Scraping</li><br/>
            <li><img style={{width: 50, height: 30}} src={Six} alt=""/>ProofReading</li><br/>
            <li><img style={{width: 50, height: 30}} src={Seven} alt=""/>HTML</li><br/>
            <li><img style={{width: 50, height: 30}} src={Eight} alt=""/>CSS</li><br/>
            <li><img style={{width: 50, height: 30}} src={Nine} alt=""/>HTML 5</li><br/>
            <li><img style={{width: 50, height: 30}} src={Ten} alt=""/>Javascript</li><br/>
        </ul>
    </div>
  )
}

export default Two