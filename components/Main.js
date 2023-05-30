import React from 'react'
import styles from '@/styles/main.module.css' 

function Main() {
 
  return (<>
    <div className={styles.main}>
        <img className={styles.pic} src='https://i.postimg.cc/0291cGN6/profile.jpg' alt="profile_pic" width={300} height={300} />
        <div className={styles.intro}>
            <h1 className={styles.introline1}>Hi! I'm Kartik,</h1>
            <h1 className={styles.introline2}>web developer</h1>
        </div>
       
    </div>
    </>)
}

export default Main