import React, {useState, useEffect } from 'react'
import markdownToHTML  from '../../../libs/markdownToHTML'
import styles from './blog-item.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'

const BlogItem = ({slug,title,coverPhoto,excerpt}) => {
    const [postExcerpt, setPostExcerpt ] = useState('');

    useEffect(async () => {
        const text = markdownToHTML(excerpt);
        setPostExcerpt(text);
    })

    return ( 
        <li className={styles.item}>
            <Link href={slug}>
                <a className={styles.blogLink}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <Image data={coverPhoto.responsiveImage} explicitWidth="100%"/>
                    <article className={styles.postTease} dangerouslySetInnerHTML={{__html: postExcerpt}}/>

                </a>
            </Link>
        </li>
    );
}
 
export default BlogItem;