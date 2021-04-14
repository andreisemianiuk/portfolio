import React from 'react'
import styles from './Main.module.css'

function Main() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.greeting}>Hi There!</span>
          <h1 className={styles.name}>I am Andrei Semianiuk</h1>
          <p className={styles.prof}>A Front-end Developer</p>
        </div>
        <div className={styles.photo}>
          <img className={styles.avatar} alt={'avatar'}/>
        </div>
      </div>
    </section>
  )
}

export default Main
