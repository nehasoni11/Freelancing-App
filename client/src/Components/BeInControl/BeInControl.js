import React from 'react'
import Content from './Content'
import { Phone } from 'react-bootstrap-icons'
import PhoneImage from './PhoneImage'

const BeInControl = () => {
  return (
    <div>
    <br />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6"><Content/></div>
        <div class="col-6"><PhoneImage/></div>
      </div>
    </div>
  </div>
  )
}

export default BeInControl;