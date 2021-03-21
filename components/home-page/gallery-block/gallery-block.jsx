import React, {useState, useEffect} from 'react';
import styles from './gallery-block.module.css';
import { Image } from 'react-datocms';

const GalleryBlock = ({pageGallery}) => {
    const [gallery, setGallery] = useState(null);
    const [randNumber, setrandNumber] = useState(null);

    useEffect(() => {
        const photos = pageGallery;
        setGallery(photos);
    })
    return ( 
        <section className={styles.section}>
            test
        </section>
     );
}
 
export default GalleryBlock;