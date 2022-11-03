import React from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput, card, updateCard,deleteCard}) => {
   const nameRef = useRef();
   const companyRef = useRef();
   const themeRef = useRef();
   const titleRef = useRef();
   const emailRef = useRef();
   const messageRef = useRef();

   const {name
    ,company
    ,theme
    ,title
    ,email
    ,message,fileName,fileURL} = card;

    const onChange = (event)=>{
        if(event.currentTarget==null){
            return;
        }

        console.log(event.currentTarget.name);
        console.log(event.currentTarget.value);
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name] : event.currentTarget.value,
        })
    };

    const onFileChange = file=>{
        updateCard({
            ...card,
            fileName:file.name,
            fileURL:file.url
        })
    }

    const onSubmit=(event)=>{
        deleteCard(card);
    };
  return (
 <form className={styles.form}>
    {console.log(fileName)}
    <input className={styles.input} ref={nameRef} type="text" name='name' value={name} onChange={onChange}/>
    <input className={styles.input} ref={companyRef} type="text" name='company' value={company} onChange={onChange}/>
    <select className={styles.select} ref={themeRef} name="theme" id="" value={theme} onChange={onChange}>
    <option value="light">light</option>
    <option value="dark">dark</option>
    <option value="colorful">colorful</option>
    </select>
    <input className={styles.input} ref={titleRef} type="text" name='title' value={title} onChange={onChange}/>
    <input className={styles.input} ref={emailRef} type="text" name='email' value={email} onChange={onChange}/>
    <textarea className={styles.textarea} ref={messageRef} name="message" cols="30" rows="10" value={message} onChange={onChange}></textarea>
    <div className={styles.fileInput}>
    <FileInput name={fileName} onFileChange={onFileChange}></FileInput>
    </div>
    <Button name='delete' onClick={onSubmit}></Button>
 </form>
    
       )
}

export default CardEditForm