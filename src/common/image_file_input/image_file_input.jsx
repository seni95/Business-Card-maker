import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imgUploader,name,onFileChange}) => {
  const inputRef = useRef();
  const onButtonClick=(event)=>{
    event.preventDefault();
    inputRef.current.click();
  }
  
  const onChange= async (event)=>{
    console.log(event.target.files[0]);
    const uploaded = await imgUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name:uploaded.original_filename,
      url:uploaded.url
    })
  
  }
  
  return (
    <div className={styles.container}>
      {console.log(onFileChange)}
      <input 
      className={styles.input}
      ref={inputRef}
      type="file" accept='image/*' name='file'
      onChange={onChange}/>
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'no file'}
      </button>
    </div>
  )
}

export default ImageFileInput