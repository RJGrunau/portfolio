import React, {useState, useEffect } from 'react'
import markdownToHTML  from '../../../libs/markdownToHTML'
import styles from './blog-item.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'

const BlogItem = ({slug,title,coverPhoto,excerpt,date}) => {
    const [postExcerpt, setPostExcerpt ] = useState(null);

    useEffect(async () => {
        const text = await markdownToHTML(excerpt);
        setPostExcerpt(text);
    })

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
                        <Image aria-label={coverPhoto.title} data={coverPhoto.responsiveImage} explicitWidth="100%" alt={coverPhoto.alt}/>
                    </div>
                    <article className={styles.postTease} aria-label={postExcerpt} dangerouslySetInnerHTML={{__html: postExcerpt}}/>
                </a>
            </Link>
        </li>
    );
}
 
export default BlogItem;