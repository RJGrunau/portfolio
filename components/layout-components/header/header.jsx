import styles from './header.module.css'
import Logo from "./logo";

const SiteHeader = () => {
    return ( 
        <header className={styles.header}>
            <Logo/>
        </header>
    );
}
 
export default SiteHeader;