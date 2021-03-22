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
    const allGalleries = data.allPhotographs
    return ( 
        <MainLayout>
            <section>
                {allGalleries.map((gall,i) => (
                    <div key={i}>
                        <h2>{gall.title}</h2>
                    </div>
                ))}
            </section>
        </MainLayout>
    );
}
 
export default Photographs;