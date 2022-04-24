import {React}  from 'react';

import Headermenu from '../header/HeaderMenu/HeaderMenu';
import Headertoolbar from '../header/HeaderToolbar/HeaderToolbar';

import styles from './MainLayout.module.scss'
import Footer from '../footer/Footer';

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <Headermenu/>
                <Headertoolbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Mainlayout;
