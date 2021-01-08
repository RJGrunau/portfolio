import styles from './author-block.module.css'
import { Image } from 'react-datocms'

const AuthorBlock = ({authData}) => {
    return (  
        <section className={styles.authSection}>
            <h1>{authData.authorname}</h1>
            <h3>{authData.jobtitle}</h3>
            <Image data={authData.authorPhoto.responsiveImage} />
        </section>
    );
}
 
export default AuthorBlock;