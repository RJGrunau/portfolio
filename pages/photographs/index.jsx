import { request } from '../../libs/datocms';
import styles from '../../styles/photographs.module.css'
import MainLayout from '../../components/layout-components/layout/layout';
import { Image } from 'react-datocms';

const PHOTOGRAPHS_QUERY = `
    query PhotographsPage {
        allPhotographs {
            title
            slug
            gallery {
              responsiveImage {
                alt
                aspectRatio
                base64
                bgColor
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
export async function getStaticProps() {
    const data = await request({
        query: PHOTOGRAPHS_QUERY
    });

    return {
        props: {
            data,
        }
    }
}

const Photographs = ({data}) => {
    const allGalleries = data.allPhotographs
    console.log(allGalleries.gallery);
    return ( 
        <MainLayout>
            <section className={styles.galleriesSection}>
                <ul className={styles.galleryList}>
                    {allGalleries.map((gall,i) => (
                        <li>
                                <div className={styles.galleryCard} key={i}>
                                    <div>
                                        <Image data={gall.gallery[0].responsiveImage}/>
                                    </div>
                                    <h2>{gall.title}</h2>
                                </div>
                        </li>
                    ))}
                </ul>
            </section>
        </MainLayout>
    );
}
 
export default Photographs;