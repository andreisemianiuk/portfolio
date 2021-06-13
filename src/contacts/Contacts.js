import React from 'react'
import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.contactsBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Contact</h3>
        </div>
        <form className={styles.formWrapper}>
          <input className={styles.input} placeholder='Name' />
          <input className={styles.input} placeholder='Email' />
          <textarea className={styles.textarea} placeholder='Your Message' />
        </form>
        <div className={styles.btnWrapper}>
          <button className={styles.btn}>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}

export default Contacts
