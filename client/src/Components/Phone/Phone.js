import React from 'react'
import PhoneImage from './PhoneImage'
import HowDoesItWork from './HowDoesItWork'

const Phone = () => {
  return (
    <div>
    <br />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6"><PhoneImage/></div>
        <div class="col-6"><HowDoesItWork/></div>
      </div>
    </div>
  </div>
  )
}

export default Phone