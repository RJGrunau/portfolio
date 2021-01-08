import Link from 'next/link'
import styles from './header.module.css'
import Logo from "./logo";

const SiteHeader = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.logoHolder}>
                <Link href="/">
                    <a className="anchor"> 
                        <Logo/>
                    </a>
                </Link>
            </div>
        </header>
    );
}
 
export default SiteHeader;