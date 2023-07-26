import React from 'react'
import One1 from "../../Resources/1.svg"
import Two from "../../Resources/2.svg"
import Three from "../../Resources/3.svg"
import Four from "../../Resources/4.svg"
import Five from "../../Resources/5.svg"
import Six from "../../Resources/6.svg"
import Seven from "../../Resources/7.svg"
import Eight from "../../Resources/8.svg"
import Nine from "../../Resources/9.svg"
import Ten from "../../Resources/10.svg"

const One = () => {
  return (
    <div>
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
            <li><img style={{width: 50, height: 30}} src={One1} alt=""/>Website Design</li><br/>
            <li><img style={{width: 50, height: 30}} src={Two} alt=""/>Mobile Apps</li><br/>
            <li><img style={{width: 50, height: 30}} src={Three} alt=""/>Android Apps</li><br/>
            <li><img style={{width: 50, height: 30}} src={Four} alt=""/>iPhone Apps</li><br/>
            <li><img style={{width: 50, height: 30}} src={Five} alt=""/>Software</li><br/>
            <li><img style={{width: 50, height: 30}} src={Six} alt=""/>Graphic Design</li><br/>
            <li><img style={{width: 50, height: 30}} src={Seven} alt=""/>Logo Design</li><br/>
            <li><img style={{width: 50, height: 30}} src={Eight} alt=""/>Public Relations</li><br/>
            <li><img style={{width: 50, height: 30}} src={Nine} alt=""/>Logistics</li><br/>
            <li><img style={{width: 50, height: 30}} src={Ten} alt=""/>Proofreading</li><br/>
        </ul>
    </div>
  )
}

export default One