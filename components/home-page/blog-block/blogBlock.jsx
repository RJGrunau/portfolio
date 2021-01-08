import styles from './blogBlock.module.css'
import BlogItem from '../blog-item/blogItem'

const BlogBlock = ({posts}) => {
    
    return ( 
        <section className={styles.section}>
            <ol role="list">
                {posts.map( p => (
                    <BlogItem 
                        key={p.id}
                        slug={p.slug}
                        title={p.title}
                        excerpt={p.excerpt}
                        coverPhoto={p.coverPhoto}
                        date={p.date}
                    />
                ))}
            </ol>
        </section>

    );
}
 
export default BlogBlock;