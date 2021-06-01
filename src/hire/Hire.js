import React from 'react'
import styles from './Hire.module.css'

function Hire() {
  return (
    <div className={styles.hireBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>I Am Available For Online Work</h3>
        </div>
        <div>
          <button className={styles.btn}>Hire Me</button>
        </div>
      </div>
    </div>
  )
}

export default Hire
