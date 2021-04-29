import Link from 'next/link'
import { Image } from 'react-datocms'
import ArticleText from '../../text-processor/articleText'
import styles from './blog-item.module.css'

const BlogItem = ({slug,title,coverPhoto,excerpt,date}) => {
    console.log(coverPhoto);
    
    return ( 
        <li className={styles.item}>
            <Link href={`posts/${slug}`}>
                <a className={styles.blogLink} aria-label={`Read post ${title}`} >
                    <div className={styles.titleBlock}>
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                        <time>{date}</time>
                    </div>
                    <div className={styles.blogImage} aria-hidden="true">
                        {/* <Image data={coverPhoto.responsiveImage} explicitWidth="100%" alt={coverPhoto.alt}/> */}
                    </div>
                    <ArticleText copy={excerpt} look={styles.postTease} />
                </a>
            </Link>
        </li>
    );
}
 
export default BlogItem;