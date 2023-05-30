import React from 'react'
import styles from '@/styles/header.module.css'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import Image from 'next/image'
import Link from 'next/link'
import coder from '../public/coder111.png'


function Header() {
  return (
    <div className={styles.header}>
        <Link href={'/'} className={styles.l} ><div className={styles.intro}>
            <Image src={coder} alt='coder' width={150} />
            <h2 className={styles.name}>Kartik</h2>
            <p className={styles.post}>Web Developer</p>
        </div></Link>
          <ul className={styles.list}>
            <Link href={'/Myskills'} > <li className={styles.listitem}>About me</li></Link>
            <Link href={'/Education'} > <li className={styles.listitem}>Education</li></Link>
            <Link href={'/Project'} > <li className={styles.listitem}>Projects</li></Link>
            <Link href={'/Achievements'} > <li className={styles.listitem}>Achievements</li></Link>
            <Link href={'/Internship'} > <li className={styles.listitem}>Internship</li></Link>
            <Link href={'/Contact'} > <li className={styles.listitem}>Contact me</li></Link>
          </ul>
          <div className={styles.links}>
            <a target='_blank' href='https://github.com/kartik01a'> <AiFillGithub className={styles.linksinner}/></a>
            <a target='_blank' href='https://www.linkedin.com/in/kartik-singh-bisht-13816a207/'> <AiFillLinkedin className={styles.linksinner}/></a>
            <a target='_blank' href='https://leetcode.com/kartik001/'><SiLeetcode className={styles.linksinner}/></a>
          </div>
    </div>
  )
}

export default Header