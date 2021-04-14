import React from 'react'
import styles from './Skills.module.css'
import Skill from './Skill'

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>My Skills</h2>
        </div>
        <div className={styles.skillsWrapper}>
          <Skill title={'HTML'}/>
          <Skill title={'CSS'}/>
          <Skill title={'JS'}/>
          <Skill title={'React'}/>
          <Skill title={'TypeScript'}/>
        </div>
      </div>
    </section>
  )
}

export default Skills
