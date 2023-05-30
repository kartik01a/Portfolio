import React from 'react'
import styles from '../styles/Education.module.css'
import Header from '@/components/Header'

function Education() {
  return (<>
    <Header/>
    <div className={styles.main}>
        <h1 className={styles.heading}>Education</h1>
        <hr/>
        <h2 className={styles.subheading}>Graduation</h2>
        <p className={styles.sub}>I am pursuing Bachelors in Technology in Computer Science and Engineering from College of Engineering Roorkee.
             Currently I am in my 3rd year of my degree.</p>
        <p className={styles.sub}>Aggregate percentage (Till now) - 80.3%</p>
        <hr/>
        <h2 className={styles.subheading}>Intermediate</h2>
        <p className={styles.sub}>I have done my Intermediate from Euro international school, Rewari.</p>
        <p className={styles.sub}>Aggregate percentage - 89.6%</p>
        <hr/>
        <h2 className={styles.subheading}>Highschool</h2>
        <p className={styles.sub}>I have done my highschool from Rockfield public school, Rohini, Delhi.</p>
        <p className={styles.sub}>Aggregate percentage - 80%</p>


    </div>
  </>)
}

export default Education