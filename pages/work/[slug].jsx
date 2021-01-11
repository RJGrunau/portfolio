import { useEffect, useState } from 'react';
import { request } from '../../libs/datocms';
import markdownToHtml from '../../libs/markdownToHTML';

import MainLayout from '../../components/layout-components/layout/layout';
import styles from '../../styles/work-slug.module.css';

const PROJECTBYSLUG_QUERY = `
    query ProjectBySlug ($slug: String){
        project(filter: {slug: {eq: $slug}}) {
            id
            slug
            title
            content
            coverImage {
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
            projectImages{
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
export async function getStaticPaths(){
    const data = await request({query: `{allProjects {slug}}`})

    return {
        paths: data.allProjects.map((proj) => `/work/${proj.slug}`),
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const data = await request({
        query: PROJECTBYSLUG_QUERY,
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

const Project = () => {
    return ( 
        <article className={styles.workItem}>

        </article>
    );
}
 
export default Project;