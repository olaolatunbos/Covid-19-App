import React from 'react'
import image from './images/image.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.header}>
            <div>
                <img className={styles.image} src={image} alt="COVID-19" />
            </div>
            <div className={styles.copyright}>
                <p>© Ola Olatunbosun</p>
            </div>
        </div>
    )
}

export default Navbar
