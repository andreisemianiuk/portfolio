import React from 'react'
import styles from './Header.module.css'

function Navlink(props) {
  return (
    <a href={'#'} className={styles.link}>
      <span className={styles.linkText}>
        {props.title}
      </span>
    </a>
  )
}

export default Navlink
