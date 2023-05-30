import React,{useState} from 'react'
import styles from '@/styles/Project.module.css'
import Header from '@/components/Header'
import Image from 'next/image'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import Data from '../components/Data'

function Project() {
    const [data1,setData] = useState(Data);
  return (<>
  <Header/>
    <div className={styles.main}>
        <h1 className={styles.heading}>My Project</h1>
        <hr/>
        <div className={styles.block}>
            {
                data1.map((data,index)=>{
                    return <div key={index} className={styles.indi}>
                        <img className={styles.img} src={data.img} alt='project_img' width={300} height={180} />
                        <span className={styles.details}>{data.name}</span>
                        <div className={styles.overlay}>
                            <h4>{data.desc}</h4>
                            <a className={styles.link} href={data.link} target='_blank'><button className={styles.btn}>Visit site<BsFillArrowRightSquareFill className={styles.icon}/></button></a>
                        </div>
                    </div>
                })
            }
        </div>
      
    </div>
    </>)
}

export default Project