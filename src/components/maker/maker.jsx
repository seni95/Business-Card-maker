import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import { useState } from 'react';

const Maker = ({authService}) => {
    const [cards,setCards] = useState([
        {
            id:'1',
            name:'Ellie',
            company:'samsung',
            theme:'dark',
            title:'software Engineer',
            email:'ellie@gmail.com',
            message:'go for it',
            fileName:'ellie',
            fileURL:null
        },
        {
            id:'2',
            name:'Ellie',
            company:'samsung',
            theme:'light',
            title:'software Engineer',
            email:'ellie@gmail.com',
            message:'go for it',
            fileName:'ellie',
            fileURL:'ellie.png'
        },
        {
            id:'3',
            name:'Ellie',
            company:'samsung',
            theme:'colorful',
            title:'software Engineer',
            email:'ellie@gmail.com',
            message:'go for it',
            fileName:'colorful',
            fileURL:null
        }

    ]);
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
            <Editor cards={cards}></Editor>
            <Preview cards={cards}></Preview>
        </div>
        <Footer></Footer>
    </section>

  )
}

export default Maker