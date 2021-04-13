import React from 'react'
import styles from './Skills.module.css'
import s from '../common/container/styles/Container.module.css'
import Skill from './Skill'

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={`${s.container} ${styles.wrapper}`}>
        <h2 className={styles.title}>My Skills</h2>
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
