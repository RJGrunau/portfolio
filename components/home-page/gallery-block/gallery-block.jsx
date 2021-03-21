import styles from './gallery-block.module.css';
import { Image } from 'react-datocms';

const GalleryBlock = ({pageImage}) => {
    

    return ( 
        <section className={styles.section}>
            <div className={styles.photoHolder}>
                <Image data={pageImage.responsiveImage}/>
            </div>
        </section>
     );
}
 
export default GalleryBlock;