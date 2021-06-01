import React from 'react'
import styles from './Services.module.css'

function Service(props) {
  return (
    <div className={styles.service}>
      <div className={styles.image}>image</div>
      <div className={styles.name}><h3>{props.title}</h3></div>
      <div className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the
        it to make a type specimen book.
      </div>
    </div>
  )
}

export default Service
