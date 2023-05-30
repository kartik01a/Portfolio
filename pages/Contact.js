import Header from '@/components/Header'
import React from 'react'
import styles from '../styles/Contact.module.css'
import {SiGmail} from 'react-icons/si'
import {IoMdCall} from 'react-icons/io'

function contact() {
  return (<>
  <Header/>
    <div className={styles.main}>
      <div className={styles.hrheading}>
        <hr className={styles.hr} />
        <h1 className={styles.heading}>Contact</h1>
      </div>
      <div className={styles.main2}>
        <h2 className={styles.details}><SiGmail/><span className={styles.details1}>kartiksinghbisht1@gmail.com</span></h2>
        <h2 className={styles.details}><IoMdCall/><span className={styles.details1}>+919351972847</span></h2>

      </div>
    </div>
  </>)
}

export default contact