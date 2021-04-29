import {useState, useEffect} from 'react'
import markdownToHTML  from '../../libs/markdownToHTML'

const ArticleText = ({copy, look}) => {
    const [postExcerpt, setPostExcerpt ] = useState(null);

    useEffect(async () => {
        const text = await markdownToHTML(copy);
        setPostExcerpt(text);
    })
    return ( 
        <article className={look} aria-label={postExcerpt} dangerouslySetInnerHTML={{__html: postExcerpt}}/>
    );
}
 
export default ArticleText;