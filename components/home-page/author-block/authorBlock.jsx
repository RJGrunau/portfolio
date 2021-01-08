import styles from './author-block.module.css'
import { Image } from 'react-datocms'

const AuthorBlock = ({authData}) => {
    return (  
        <section className={styles.authSection}>
            <div className={styles.busCard}>
                <h1>{authData.authorname}</h1>
                <h3>{authData.jobtitle}</h3>
            </div>
            <div className={styles.authPic}>
                <Image data={authData.authorPhoto.responsiveImage} />
            </div>
        </section>
    );
}
 
export default AuthorBlock;