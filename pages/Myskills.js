import TextSphere from '../components/TextSphere'
import Header from '../components/Header'
import React from 'react'
import styles from '../styles/myskills.module.css'


function Myskills() {
   
  return (<>
  <Header/>
    <div className={styles.main}>
      <div className={styles.part}>
        <h1>About Me</h1>
        <p className={styles.center}>Hi! I am Kartik Singh Bisht, web developer from Roorkee, Uttrakhand. Currently,
           I am pursuing Bachelors of Technology from College of Engineering Roorkee.
            I have keen interest in web development so I started same from my first year onwards.
             I prefer to keep learning, continue challenging myself with new technologies. </p>
        <p>Right side are some technologies that I had worked in.</p>
      </div>
      <div className={styles.part2}><TextSphere/></div>
    </div>
    </>)

}

export default Myskills