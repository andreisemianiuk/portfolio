import React from 'react'
import styles from './Services.module.css'
import Service from './Service'

function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>My Services</h2>
        </div>
        <div className={styles.servicesWrapper}>
          <Service title={'Social Network'} />
          <Service title={'TodoList'} />
          <Service title={'FFL'} />
          <Service title={'FFL'} />
          <Service title={'FFL'} />
        </div>
      </div>
    </section>
  )
}

export default Services
