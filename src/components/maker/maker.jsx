import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import { useState } from 'react';

const Maker = ({FileInput, authService,cardRepository}) => {
    const [userId,setUserId] = useState();

    const [cards,setCards] = useState({});
    const history = useHistory();
    const onLogOut = ()=>{
        authService.logOut();

    }


    useEffect(()=>{

        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCard(userId,cards=>{
            setCards(cards);
        })
        return ()=>{
            stopSync();
        }
    },[userId,cardRepository]);


    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                history.push('/');
                window.location.reload();
            }else if(user){
                setUserId(user.uid);
            }
        })
    },[userId, authService]);


    const createOrUpdateCard = (card)=>{
     setCards(cards=>{
        const updated = {...cards};
        updated[card.id] = card;
        return updated;
     });
     cardRepository.saveCard(userId,card);
    }


    const deleteCard = (card)=>{
        setCards(cards=>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
         });
    cardRepository.removeCard(userId,card);
    }

  return (
    <section className={styles.maker}>

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