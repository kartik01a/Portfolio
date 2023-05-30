import React from 'react'
import styles from '../styles/Internship.module.css'
import Header from '@/components/Header'

function Internship() {
    return (<>
        <Header/>
          <div className={styles.main}>
            <div className={styles.hrheading}>
              <hr className={styles.hr} />
              <h1 className={styles.heading}>Internship</h1>
            </div>
            <div className={styles.main2}>
                <h2>OyeBusy Technologies</h2>
                <p>OyeBusy Technologies was founded in 2019. They provide many services in different sector like Software solutions,
                     Digital marketing, SEO, Customer service and Application development. OyeBeauty is an subsidiary to OyeBusy.
                 </p>
                <div className={styles.about}>
                    <div className={styles.info}>
                        <h3>Role</h3>
                        <h3>Tech. worked with</h3>
                        <h3>Contribution</h3>
                        <h3>Duration</h3>
                    </div>
                    <div className={styles.info}>
                        <h3>Frontend developer</h3>
                        <h3>NextJs,&nbsp; ReactJs,&nbsp; Agora,&nbsp; Figma,&nbsp; Javascript,&nbsp; CSS</h3>
                        <h3>Creating components from scratch, API integration, Bug fixing.</h3>
                        <h3>5 Months</h3>
                    </div>
                    <div className={styles.info1}>
                        <a target='_blank' href='https://i.postimg.cc/3wG7M4Bv/Kartik-Singh-Bisht-Hired-Certificate-page-0001.jpg' alt='img'> <img className={styles.img} src='https://i.postimg.cc/3wG7M4Bv/Kartik-Singh-Bisht-Hired-Certificate-page-0001.jpg' alt='img' width={150} height={100}/></a>
                    </div>
                </div>
            </div>
          </div>
        </>)
}

export default Internship