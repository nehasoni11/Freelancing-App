import React from 'react'
import One1 from "../../Resources/21.svg"
import Two2 from "../../Resources/22.svg"
import Three3 from "../../Resources/23.svg"
import Four from "../../Resources/24.svg"
import Five from "../../Resources/25.svg"
import Six from "../../Resources/26.svg"
import Seven from "../../Resources/27.svg"
import Eight from "../../Resources/28.svg"
import Nine from "../../Resources/29.svg"
import Ten from "../../Resources/30.svg"

const Three = () => {
  return (
    <div>
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
            <li><img style={{width: 50, height: 30}} src={One1} alt=""/>Data Processing</li><br/>
            <li><img style={{width: 50, height: 30}} src={Two2} alt=""/>Python</li><br/>
            <li><img style={{width: 50, height: 30}} src={Three3} alt=""/>Wordpress</li><br/>
            <li><img style={{width: 50, height: 30}} src={Four} alt=""/>Web Search</li><br/>
            <li><img style={{width: 50, height: 30}} src={Five} alt=""/>Finance</li><br/>
            <li><img style={{width: 50, height: 30}} src={Six} alt=""/>Legal</li><br/>
            <li><img style={{width: 50, height: 30}} src={Seven} alt=""/>Linux</li><br/>
            <li><img style={{width: 50, height: 30}} src={Eight} alt=""/>Manufacturing</li><br/>
            <li><img style={{width: 50, height: 30}} src={Nine} alt=""/>Amazon</li><br/>
            <li><img style={{width: 50, height: 30}} src={Ten} alt=""/>Content Writing</li>
        </ul>
    </div>
  )
}

export default Three