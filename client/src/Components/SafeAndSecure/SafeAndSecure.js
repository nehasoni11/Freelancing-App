import React from 'react'
import Content from './Content'
import Safety from './Safety'

const SafeAndSecure = () => {
  return (
    <div>
    <br />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6"><Safety/></div>
        <div class="col-6"><Content/></div>
      </div>
    </div>
  </div>
  )
}

export default SafeAndSecure;