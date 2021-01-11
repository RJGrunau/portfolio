import { useEffect, useState } from 'react';
import { request } from '../../libs/datocms';
import markdownToHtml from '../../libs/markdownToHTML';

import MainLayout from '../../components/layout-components/layout/layout';
import { Image } from 'react-datocms';
import styles from '../../styles/post-slug.module.css'

const POSTBYSLUG_QUERY = `
    query PostBySlug ($slug: String){
        post(filter: {slug: {eq: $slug}}) {
            date
            title
            coverPhoto {
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
            content
        }
    }
`
export async function getStaticPaths(){
    const data = await request({query: `{allPosts {slug}}`})

    return {
        paths: data.allPosts.map((post) => `/posts/${post.slug}`),
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const data = await request({
        query: POSTBYSLUG_QUERY,
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



const PostSlug = ({data}) => {
    const post = data.post
    const [pageContent, setContent] = useState(null);

    useEffect(async () => {
        const text = await markdownToHtml(data.post.content);
        setContent(text)
    })
    return ( 
        <MainLayout>
            <article className={styles.article}>
                <Image data={data.post.coverPhoto.responsiveImage}/>
                <div className={styles.titleBlock}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <div className={styles.postDate}>{post.date}</div>
                </div>
                <div className={styles.postContent} dangerouslySetInnerHTML={{__html: pageContent}}/>
            </article>
        </MainLayout>
    );
}
 
export default PostSlug;