import React from 'react'
import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.contactsBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Contacts</h3>
        </div>
        <form className={styles.formWrapper}>
          <input className={styles.input}/>
          <input className={styles.input}/>
          <textarea className={styles.textarea}/>
        </form>
        <div className={styles.btnWrapper}>
          <button className={styles.btn}>SEND</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts
