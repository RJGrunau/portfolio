import { request } from '../../libs/datocms'
import MainLayout from '../../components/layout-components/layout/layout'

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
    console.log(data);
    return ( 
        <MainLayout>
            <section>
                hi
            </section>
        </MainLayout>
    );
}
 
export default Photographs;