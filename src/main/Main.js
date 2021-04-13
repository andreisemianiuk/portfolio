import React from 'react'
import styles from './Main.module.css'
import ava from '../images/surf_photo.jpg'
import s from '../common/container/styles/Container.module.css'

function Main() {
  return (
    <section className={styles.home}>
      <div className={`${styles.container} ${s.container}`}>
        <div className={styles.text}>
          <span>Hi There!</span>
          <h1>I am Andrei Semianiuk</h1>
          <p>A Front-end Developer</p>
        </div>
        <div className={styles.photo}>
          <img src={ava} className={styles.avatar} alt={'avatar'}/>
        </div>
      </div>
    </section>
  )
}

export default Main
