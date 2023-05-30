import React,{useState} from 'react'
import { Workshop,Programming,Sports } from '@/components/Data'
import styles from '../styles/Achievements.module.css'
import Header from '@/components/Header';
function Achievements() {
    const [workshop,setWorkshop] = useState(Workshop);
    const [programming,setProgramming] = useState(Programming);
    const [sports,setSports] = useState(Sports);
  return (<>
    <Header/>
    <div className={styles.main}>
        <h1 className={styles.heading}>Progamming</h1>
        <hr/>
        <div className={styles.block}>
            {
                programming.map((data)=>{
                    return <a key={data.id} className={styles.link} href={data.img} target='_blank'><div className={styles.indi}>
                                <img className={styles.img} src={data.img} alt='project_img' width={300} height={180} />
                                <span className={styles.details}>{data.name}</span>
                            </div></a>
                })
            }
        </div>
        <h1 className={styles.heading}>Workshop</h1>
        <hr/>
        <div className={styles.block}>
            {
                workshop.map((data)=>{
                    return <a key={data.id} className={styles.link} href={data.img} target='_blank'><div className={styles.indi}>
                                <img className={styles.img} src={data.img} alt='project_img' width={300} height={180} />
                                <span className={styles.details}>{data.name}</span>
                            </div></a>
                })
            }
        </div>
        <h1 className={styles.heading}>Co-Curricular</h1>
        <hr/>
        <div className={styles.block}>
            {
                sports.map((data)=>{
                    return <a key={data.id} className={styles.link} href={data.img} target='_blank'><div className={styles.indi}>
                                <img className={styles.img} src={data.img} alt='project_img' width={300} height={180} />
                                <span className={styles.details}>{data.name}</span>
                            </div></a>
                })
            }
        </div>
    </div>
  </>)
}

export default Achievements