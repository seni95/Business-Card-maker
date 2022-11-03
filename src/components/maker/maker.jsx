import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import { useState } from 'react';

const Maker = ({FileInput, authService}) => {
    const [cards,setCards] = useState(
    {   
        '1': {
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
       '2':  {
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
       '3': {
        id:'3',
        name:'Ellie',
        company:'samsung',
        theme:'colorful',
        title:'software Engineer',
        email:'ellie@gmail.com',
        message:'go for it',
        fileName:'colorful',
        fileURL:null
    },

       });
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


    const createOrUpdateCard = (card)=>{
     setCards(cards=>{
        const updated = {...cards};
        updated[card.id] = card;
        return updated;
     });
    }
    const deleteCard = (card)=>{
        setCards(cards=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
         });
    }

  return (
    <section className={styles.maker}>
    {console.log(typeof(addCard))}

        <Header onLogOut={onLogOut}></Header>
        <div className={styles.container}>
            <Editor 
            FileInput={FileInput} 
            cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}></Editor>
            
            <Preview cards={cards}></Preview>
        </div>
        <Footer></Footer>
    </section>

  )
}

export default Maker