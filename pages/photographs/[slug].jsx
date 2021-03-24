import React, {useEffect, useState} from 'react';
import styles from '../../styles/gallery-page.module.css';
// import markdownToHtml from '../../libs/markdownToHTML';
import { request } from '../../libs/datocms';
import { Image } from 'react-datocms'
import MainLayout from '../../components/layout-components/layout/layout';


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
    const [index, setIndex ] = useState(2);
    const incrementSlide = () => {
        let galleryLength = photographs.length;
        galleryLength = galleryLength - 1;
        let currentPhoto = index;
        currentPhoto ++ 
        setIndex(currentPhoto);
    }
    return (  
        <MainLayout>
            <div className={styles.photoHolder}>
                <div className={styles.frame}>
                    <div className={styles.previous}>prev</div>
                    <Image className={styles.photo} data={data.photograph.gallery[index].responsiveImage}/>
                    <div 
                        className={styles.next}
                        onClick={incrementSlide}
                    >
                        next
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
 
export default Gallery;