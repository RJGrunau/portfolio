import styles from './author-block.module.css'

const AuthorBlock = ({authData}) => {
    return (  
        <section className={styles.authSection}>
            <div className={styles.busCard} tabIndex="0">
                <h1>{authData.authorname}</h1>
                <h3>{authData.jobtitle}</h3>
            </div>
        </section>
    );
}
 
export default AuthorBlock;