import React, {useState, useEffect} from 'react';
import styles from './gallery-block.module.css';
import { Image } from 'react-datocms';

const GalleryBlock = ({pageGallery}) => {
    

    return ( 
        <section className={styles.section}>
            <div className={styles.photoHolder}>
                <Image data={pageGallery[0].responsiveImage}/>
            </div>
        </section>
     );
}
 
export default GalleryBlock;