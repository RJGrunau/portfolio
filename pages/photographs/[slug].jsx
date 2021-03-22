import markdownToHtml from '../../libs/markdownToHTML';
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
    return (  
        <MainLayout>
            {data.photograph.title}
        </MainLayout>
    );
}
 
export default Gallery;