import { request } from '../../libs/datocms';
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
    console.log(data);
    return ( 
        <article className={styles.article}>

        </article>
    );
}
 
export default PostSlug;