import styles from './layout.module.css'


const MainLayout = ({children}) => {
    return ( 
    <div className={styles.layout}>
        {/* <SiteHeader/> */}
            <main>
                {children}
            </main>    
    </div>
    );
}
 
export default MainLayout;