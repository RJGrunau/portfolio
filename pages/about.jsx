import { useEffect, useState } from 'react'
import { request } from '../libs/datocms'
import markdownToHTML from '../libs/markdownToHTML'

import styles from '../styles/about-page.module.css'
import MainLayout from '../components/layout-components/layout/layout'

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
    const [text, setText ] = useState('')

    useEffect(async () => {
        const pageContent = await markdownToHTML(data.page.content)

        setText(pageContent);
    })

    return ( 
        <MainLayout>
            <section className={styles.aboutSection}>

            </section>
        </MainLayout>
    );
}
 
export default AboutPage;