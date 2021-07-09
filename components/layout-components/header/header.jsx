import Link from 'next/link'
import styles from './header.module.css'
import Logo from "./logo";

const SiteHeader = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.logoHolder}>
                <Link href="/">
                    <a className="anchor" aria-label="link to home page"> 
                        <Logo/>
                    </a>
                </Link>
            </div>
            <nav className={styles.siteNav}>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/posts">
                            <a className={styles.navLink}>
                                Posts
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a className={styles.navLink}>
                                Work
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className={styles.navLink}>
                                About
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default SiteHeader;