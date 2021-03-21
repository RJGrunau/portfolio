import React, {useState, useEffect} from 'react';
import markdownToHtml from '../../../libs/markdownToHTML';
import styles from './author-block.module.css';

const AuthorBlock = ({authData,shortBio}) => {
    const [pageText, setText] = useState('');

    useEffect(async () => {
        const pt = await markdownToHtml(shortBio);
        setText(pt);
    })
    return (  
        <section className={styles.authSection}>
            <div className={styles.busCard} tabIndex="0">
                <h1>{authData.authorname}</h1>
                <h3>{authData.jobtitle}</h3>
                <article dangerouslySetInnerHTML={{__html: pageText}}/>
            </div>
        </section>
    );
}
 
export default AuthorBlock;