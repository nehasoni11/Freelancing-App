import React from 'react'
import One1 from "../../Resources/31.svg"
import Two2 from "../../Resources/32.svg"
import Three3 from "../../Resources/33.svg"
import Four4 from "../../Resources/34.svg"
import Five from "../../Resources/35.svg"
import Six from "../../Resources/36.svg"
import Seven from "../../Resources/37.svg"
import Eight from "../../Resources/38.svg"
import Nine from "../../Resources/39.svg"
import Ten from "../../Resources/40.svg"

const Four = () => {
  return (
    <div>
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
            <li><img style={{width: 50, height: 30}} src={One1} alt=""/>Marketing</li><br/>
            <li><img style={{width: 50, height: 30}} src={Two2} alt=""/>Excel</li><br/>
            <li><img style={{width: 50, height: 30}} src={Three3} alt=""/>Ghostwriting</li><br/>
            <li><img style={{width: 50, height: 30}} src={Four4} alt=""/>Copywriting</li><br/>
            <li><img style={{width: 50, height: 30}} src={Five} alt=""/>Accounting</li><br/>
            <li><img style={{width: 50, height: 30}} src={Six} alt=""/>MySQL</li><br/>
            <li><img style={{width: 50, height: 30}} src={Seven} alt=""/>Banner Design</li><br/>
            <li><img style={{width: 50, height: 30}} src={Eight} alt=""/>Illustration</li><br/>
            <li><img style={{width: 50, height: 30}} src={Nine} alt=""/>Copywriting</li><br/>
            <li><img style={{width: 50, height: 30}} src={Ten} alt=""/>PHP</li><br/>
        </ul>
    </div>
  )
}

export default Four