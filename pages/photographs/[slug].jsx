import React, {useEffect, useState} from 'react';
import styles from '../../styles/gallery-page.module.css';
import { request } from '../../libs/datocms';
import { Image } from 'react-datocms'
import MainLayout from '../../components/layout-components/layout/layout';
import {IoChevronBack,IoChevronForward} from 'react-icons/io5'


const GALLERYBYSLUG_QUERY = `
    query GalleryBySlug ($slug: String){
        photograph(filter: {slug: {eq: $slug}}) {
            id
            slug
            title
            gallery {
              responsiveImage {
                alt
                aspectRatio
                base64
                height
                sizes
                src
                srcSet
                title
                webpSrcSet
                width
              }
            }
        }
    }
`

export async function getStaticPaths(){
    const data = await request({query: `{allPhotographs {slug}}`})

    return {
        paths: data.allPhotographs.map((gallery) => `/photographs/${gallery.slug}`),
        fallback: false
    }
}

export async function getStaticProps({params}){
    const data = await request({
        query: GALLERYBYSLUG_QUERY,
        variables: {
            slug: params.slug
        }
    })

    return {
        props: {
            data,
        }
    }
}

const Gallery = ({data}) => {
    const photographs = data.photograph.gallery;
    const [index, setIndex ] = useState(0);
    
    const incrementSlide = () => {
        let galleryLength = photographs.length;
        galleryLength = galleryLength - 1;
        let currentPhoto = index;
        currentPhoto ++ 
        if(currentPhoto > galleryLength){
            currentPhoto = 0;
            setIndex(currentPhoto);
        }
        setIndex(currentPhoto);
    }

    const decrementSlide = () => {
        let galleryLength = photographs.length;
        galleryLength = galleryLength - 1;
        let currentPhoto = index;
        currentPhoto --;
        if(currentPhoto <= 0){
            currentPhoto = galleryLength;
            setIndex(currentPhoto);
        }
        setIndex(currentPhoto);
    }
    return (  
        <MainLayout>
            <div className={styles.photoHolder}>
                <div className={styles.frame}>
                    <div 
                        className={styles.previous}
                        onClick={decrementSlide}
                        onKeyDown={decrementSlide}
                        tabIndex="0"
                        aria-label="previous photo"
                        role="button"
                    >
                        <IoChevronBack aria-hidden="true"/>
                    </div>
                    <Image className={styles.photo} data={data.photograph.gallery[index].responsiveImage}/>
                    <div 
                        className={styles.next}
                        onClick={incrementSlide}
                        onKeyDown={incrementSlide}
                        tabIndex="0"
                        aria-label="next photo"
                        role="button"
                    >
                        <IoChevronForward aria-hidden="true"/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
 
export default Gallery;