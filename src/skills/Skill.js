import React from 'react'
import styles from './Skills.module.css'

function Skill(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillIcon}>Icon</div>
      <h3 className={styles.skillTitle}>{props.title}</h3>
      <p className={styles.skillDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default Skill
