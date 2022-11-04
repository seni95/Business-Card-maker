import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';
import ImgUploader from './service/imgUploader';
import ImageFileInput from './common/image_file_input/image_file_input';
import CardRepository from './service/card_repository';


const authService = new AuthService();
const imgUploader = new ImgUploader();
const FileInput = props =>{
  return <ImageFileInput {...props} imgUploader={imgUploader}/>;
}

const cardRepository = new CardRepository();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
