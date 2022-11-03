import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imgUploader,name,onFileChange}) => {
  const [loading,setLoading] = useState(false);
  

  const inputRef = useRef();
  const onButtonClick=(event)=>{
    event.preventDefault();
    inputRef.current.click();
  }
  
  const onChange= async (event)=>{
    setLoading(true);
    const uploaded = await imgUploader.upload(event.target.files[0]);
    onFileChange({
      name:uploaded.original_filename,
      url:uploaded.url
    })
    setLoading(false);
  
  }
  
  return (
    <div className={styles.container}>
      {console.log(onFileChange)}
      <input 
      className={styles.input}
      ref={inputRef}
      type="file" accept='image/*' name='file'
      onChange={onChange}/>
      {!loading &&
      <button className={name?styles.buttonPink:styles.button} onClick={onButtonClick}>
      {name || 'no file'}
    </button>
    }
    {loading &&
      <div className={styles.loading}></div>
    }
    </div>
  )
}

export default ImageFileInput