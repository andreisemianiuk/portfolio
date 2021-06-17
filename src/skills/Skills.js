import React from 'react'
import styles from './Skills.module.css'
import Skill from './Skill'
import TypeScriptIcon from '../icons/typescript.png'
import ReactIcon from '../icons/react.png'
import ReduxIcon from '../icons/redux.png'
import JSIcon from '../icons/javascript.png'
import CSSIcon from '../icons/css.png'
import HTML5Icon from '../icons/html-5.png'
import GitIcon from '../icons/github_icon.png'

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.skillsTitle}>
          <h2>My Skills</h2>
        </div>
        <div className={styles.skillsWrapper}>
          <Skill
            title={'React'}
            icon={ReactIcon}/>
          <Skill
            title={'TypeScript'}
            icon={TypeScriptIcon}
          />
          <Skill
            title={'Redux'}
            icon={ReduxIcon}
          />
          <Skill
            title={'JS'}
            icon={JSIcon}
          />
          <Skill
            title={'HTML'}
            icon={HTML5Icon}
          />
          <Skill
            title={'CSS'}
            icon={CSSIcon}
          />
          <Skill
            title={'Git'}
            icon={GitIcon}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
