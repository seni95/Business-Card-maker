import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
const Maker = ({authService}) => {
    const history = useHistory();
    const onLogOut = ()=>{
        authService.logOut();

    }


    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                history.push('/');
                window.location.reload();
            }
        })
    })
  return (

    <section className={styles.maker}>
        <Header onLogOut={onLogOut}></Header>
        <Footer></Footer>
    </section>

  )
}

export default Maker