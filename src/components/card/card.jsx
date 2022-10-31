import React from 'react';
import styles from './card.module.css';

const DEAFULT_IMG = 'images/default_logo.png';

const Card = ({ card }) => {
    const {
        id, name, company, theme, title,
        email, message, fileName, fileURL
    } = card;
    const url = fileURL || DEAFULT_IMG;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img src={url} alt="profile_photo" className={styles.avatar} />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    )
}

function getStyles(theme) {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
                throw new Error(`unknown theme:${theme}`);
    }
}

export default Card