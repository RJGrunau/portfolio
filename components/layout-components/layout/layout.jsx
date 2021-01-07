import styles from './layout.module.css';

import SiteHeader from '../header/header';

const MainLayout = ({children}) => {
    return ( 
    <div className={styles.layout}>
        <SiteHeader/>
            <main className={styles.main}>
                {children}
            </main>    
    </div>
    );
}
 
export default MainLayout;