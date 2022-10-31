import React from 'react';
import ImageFileInput from '../../common/image_file_input/image_file_input';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    const {
        id, name, company, theme, title,
        email, message, fileName, fileURL
    } = card;

    const onSubmit=()=>{};
  return (
 <form className={styles.form}>
    <input className={styles.input} type="text" name='name' value={name}/>
    <input className={styles.input} type="text" name='company' value={company}/>
    <select className={styles.select} name="theme" id="" value={theme}>
    <option value="light">light</option>
    <option value="dark">dark</option>
    <option value="colorful">colorful</option>
    </select>
    <input className={styles.input} type="text" name='title' value={title}/>
    <input className={styles.input} type="text" name='email' value={email}/>
    <textarea className={styles.textarea} name="message" cols="30" rows="10" value={message}></textarea>
    <div className={styles.fileInput}>
    <ImageFileInput></ImageFileInput>
    </div>
    <Button name='delete' onClick={onSubmit}></Button>
 </form>
    
       )
}

export default CardEditForm