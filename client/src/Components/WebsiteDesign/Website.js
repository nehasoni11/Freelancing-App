import React from 'react'
import SecondHeader from '../Header/SecondHeader'
import FirstHeader from '../Header/FirstHeader'
import styles from "./Website.module.css"

const Website = () => {
  return (
    <div>
        <FirstHeader/>
        <SecondHeader/>
        <article
        className={styles.article}
        style={{
          backgroundImage: `url(https://estates.leeds.ac.uk/wp-content/uploads/2023/04/VR-image-845-x-321.png)`,
          height: 600,
        }}
      >
        <br /> <br /> <br />  <br /><br /><br /> <br /><br />{/* <br /><br /><br /><br /><br /><br />  */}
        <h1 className={styles.header}>
          &nbsp; &nbsp; &nbsp; &nbsp; Make it real
 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; with Developers Inc.
          <br />
        </h1>
        <br />
        <h6 className={styles.p}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Find inspiration for your next big idea
          <br /> 
        </h6>
        <br /> <br />
        <h6 className={styles.p}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This website design cost $200 USD and took 9 days

          <br /> 
        </h6>
        <br />
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp;
      </article>
    </div>
  )
}

export default Website