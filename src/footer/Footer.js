import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}>
          <h3>Andrei Semianiuk</h3>
        </div>
        <div className={styles.socials}>
          <div className={styles.icon}>Linkedin</div>
          <div className={styles.icon}>Facebook</div>
          <div className={styles.icon}>Twitter</div>
          <div className={styles.icon}>Codewars</div>
        </div>
        <p className={styles.copyright}>
          © 2021 it-incubator, All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
