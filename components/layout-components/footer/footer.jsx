import { useEffect, useState } from 'react';
import styles from './footer.module.css'


const SiteFooter = () => {
   

    return ( 
        <footer className={styles.footer}>
            <p>&#169; 2021</p>
        </footer>
    );
}
 
export default SiteFooter;