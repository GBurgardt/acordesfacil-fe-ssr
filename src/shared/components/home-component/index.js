import React, { useEffect } from 'react';
import styles from './index.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import SearchComponent from '../search-component';


const HomeComponent = (props) => {
    
    useEffect(() => { }, []);


    return (
        <div className={styles.bodyContainer}>
            <header className={styles.header}>
                <nav className={styles.left}>
                    <FontAwesomeIcon className={styles.barsIcon} icon={faBars} />
                </nav>
                <a href="index.html" className={styles.logo}>AcordesFacil</a>
                <nav className={styles.right}>
                    <a href="#" className={`${styles.button} ${styles.alt}`}>Log in</a>
                </nav>
            </header>

            <div className={styles.bodyContent}>
                <div className={styles.favoritesContainer}>
                    <ul className={styles.favoritesColumn}>
                        <li>charly garcia</li>
                        <li>john lennon</li>
                        <li>fito paez</li>
                        <li>adrían dárgelos</li>
                        <li>luis alberto spinetta</li>
                        <li>conociendo rusia</li>
                        <li>rata blanca</li>
                        <li>charly garcia</li>
                        <li>john lennon</li>
                        <li>fito paez</li>
                        <li>adrían dárgelos</li>
                        <li>luis alberto spinetta</li>
                        <li>conociendo rusia</li>
                        <li>rata blanca</li>
                        <li>charly garcia</li>
                        <li>john lennon</li>
                        <li>fito paez</li>
                        <li>adrían dárgelos</li>
                        <li>luis alberto spinetta</li>
                        <li>conociendo rusia</li>
                        <li>rata blanca</li>
                    </ul>
                    <ul className={styles.favoritesColumn}>
                        <li>demoliendo hoteles</li>
                        <li>working class hero</li>
                        <li>cadaver exquisito</li>
                        <li>rubí</li>
                        <li>ana no duerme</li>
                        <li>tu encanto</li>
                        <li>solo para amarte</li>
                        <li>demoliendo hoteles</li>
                        <li>working class hero</li>
                        <li>cadaver exquisito</li>
                        <li>rubí</li>
                        <li>ana no duerme</li>
                        <li>tu encanto</li>
                        <li>solo para amarte</li>
                        <li>demoliendo hoteles</li>
                        <li>working class hero</li>
                        <li>cadaver exquisito</li>
                        <li>rubí</li>
                        <li>ana no duerme</li>
                        <li>tu encanto</li>
                        <li>solo para amarte</li>
                    </ul>
                </div>
                <div className={styles.searchContainer}>
                    <SearchComponent></SearchComponent>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;
