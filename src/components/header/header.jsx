import React from 'react';
import styles from './header.module.css';

const Header = ({onLogOut}) => {
  return (
    <header className={styles.header}>

      {onLogOut && (<button onClick={onLogOut} className={styles.logOut}>
        LogOut
      </button>) }

      <img src='images\logo.png' alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  )
}

export default Header