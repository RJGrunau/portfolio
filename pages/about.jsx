import { useEffect, useState } from 'react'
import { request } from '../libs/datocms'
import markdownToHTML from '../libs/markdownToHTML'

import { Image } from 'react-datocms'
import MainLayout from '../components/layout-components/layout/layout'
import styles from '../styles/about-page.module.css'

const ABOUTPAGE_QUERY = `
    query AboutPage {
        page(filter: {name: {eq: "About"}}) {
            content
            pageImage {
              responsiveImage {
                aspectRatio
                alt
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
export async function getStaticProps() {
    const data = await request({
        query: ABOUTPAGE_QUERY
    })

    return {
        props: {
            data,
        }
    }
}

const AboutPage = ({ data }) => {
    const pageImage = data.page.pageImage
    const [text, setText ] = useState('')

    useEffect(async () => {
        const pageContent = await markdownToHTML(data.page.content)

        setText(pageContent);
    })

    return ( 
        <MainLayout>
            <section className={styles.aboutSection}>
                <div className={styles.aboutImage}>
                    <Image data={pageImage.responsiveImage}/>
                </div>
            </section>
        </MainLayout>
    );
}
 
export default AboutPage;