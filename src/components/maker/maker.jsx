import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import Editor from '../editor/editor';

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
        <div className={styles.container}>
            <Editor></Editor>
            <Preview></Preview>
        </div>
        <Footer></Footer>
    </section>

  )
}

export default Maker