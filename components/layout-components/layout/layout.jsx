import styles from './layout.module.css';

import SiteHeader from '../header/header';
import SiteFooter from '../footer/footer';

const MainLayout = ({children}) => {
    return ( 
    <div className={styles.layout}>
        <SiteHeader/>
            <main className={styles.main}>
                {children}
            </main>  
        <SiteFooter/>  
    </div>
    );
}
 
export default MainLayout;