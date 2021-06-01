import React from 'react'
import styles from './Header.module.css'
import Navlink from './Navlink'
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <Navlink title='Home'/>
          <Navlink title='Skills'/>
          <Navlink title='Services'/>
          <Navlink title='Footer'/>
        </nav>
      </div>
    </header>
  )
}

export default Header
