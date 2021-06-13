import React from 'react'
import styles from './Skills.module.css'
import Skill from './Skill'
import TypeScriptIcon from '../icons/typescript.png'
import ReactIcon from '../icons/react.png'
import JSIcon from '../icons/javascript.png'
import CSSIcon from '../icons/css.png'
import HTML5Icon from '../icons/html-5.png'

function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.skillsTitle}>
          <h2>My Skills</h2>
        </div>
        <div className={styles.skillsWrapper}>
          <Skill
            title={'HTML'}
            icon={HTML5Icon}
            text={
              'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation'
            }
          />
          <Skill
            title={'CSS'}
            icon={CSSIcon}
            text='Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript'
          />
          <Skill
            title={'JS'}
            icon={JSIcon}
            text='JavaScript ,often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions'
          />
          <Skill
            title={'React'}
            icon={ReactIcon}
            text='React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications'
          />
          <Skill
            title={'TypeScript'}
            icon={TypeScriptIcon}
            text='TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript'
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
