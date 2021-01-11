import styles from '../../styles/posts.module.css'
import { request } from '../../libs/datocms'
import Link from 'next/link'
import Layout from '../../components/layout-components/layout/layout'


const POSTSPAGE_QUERY = `
    query PostsPage {
        allPosts {
            id
            slug
            date
            title
        }
    }
`
export async function getStaticProps(){
    const data = await request({
        query: POSTSPAGE_QUERY
    })

    return{
        props: {
           data,
        }
    }
}


const PostsPage = ({data}) => {
    
    return ( 
        <Layout>
            <section className={styles.postSection}>
                <ol className={styles.ol}>
                    {data.allPosts.map(p => (
                        <li className={styles.li} key={p.id}>
                            <Link href={`/posts/${p.slug}`}>
                                <a className="link">
                                    <div>
                                        {p.title}
                                    </div>
                                </a>
                            </Link>
                            <time className={styles.time}>{p.date}</time>
                        </li>
                    ))}
                </ol>
            </section>
        </Layout>
    );
}
 
export default PostsPage;