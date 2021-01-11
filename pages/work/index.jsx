import {request } from '../../libs/datocms'
import styles from '../../styles/work-page.module.css'
import MainLayout from '../../components/layout-components/layout/layout'


const WORKPAGE_QUERY = `
    query WorkPage {
        allProjects {
            id
            slug
            title
            coverImage {
              responsiveImage (imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
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
        query: WORKPAGE_QUERY
    });

    return {
        props: {
            data,
        },
    }
}

const WorkPage = ({data}) => {
    const allProjects = data.allProjects
    return ( 
        <MainLayout>
            {allProjects.map(proj => (
                <h2>{proj.title}</h2>
            ))}
        </MainLayout>
    );
}
 
export default WorkPage;