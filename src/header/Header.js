import React from 'react'
import styles from './Header.module.css'
import Navlink from './Navlink'
// import logo from '../images/logo.png'
import s from '../common/container/styles/Container.module.css'

function Header() {
  return (
    <header className={styles.header}>
      {/*<a href={'/'}>*/}
      {/*  <img src={logo} className={styles.logo} alt={'logo'}/>*/}
      {/*</a>*/}
      <div className={`${s.container} ${styles.wrapper}`}>
        <nav className={styles.nav}>
          <Navlink title='Home'/>
          <Navlink title='Skills'/>
          <Navlink title='Services'/>
          <Navlink title='Contacts'/>
        </nav>
      </div>
    </header>
  )
}

export default Header
