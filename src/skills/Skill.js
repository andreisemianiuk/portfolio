import React from 'react'
import styles from './Skills.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skill(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillIcon}>
        <img src={props.icon} alt='icon' />
      </div>
      <h3 className={styles.skillTitle}>{props.title}</h3>
      <p className={styles.skillDescription}>{props.text}</p>
    </div>
  )
}

export default Skill
