import Head from 'next/head'
import styles from './layout.module.css';
import SiteHeader from '../header/header';
import SiteFooter from '../footer/footer';

const MainLayout = ({children, title}) => {
    return ( 
    <>
        <Head>
            <title>{`${title} | Robert Grunau`}</title>
        </Head>
        <div className={styles.layout}>
            <SiteHeader/>
                <main id="mainContent" className={styles.main}>
                    {children}
                </main>  
            <SiteFooter/>  
        </div>
    </>
    );
}
 
export default MainLayout;