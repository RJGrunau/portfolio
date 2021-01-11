import Link from 'next/link';
import { Image } from 'react-datocms';
import styles from './workCard.module.css';


const WorkCard = ({slug,title,coverImage}) => {
    return ( 
        <Link href={`work/${slug}`} >
            <a className={styles.workCard}>
                <div className={styles.projTitleCard}>
                    <h2 className={styles.projTitle}>{title}</h2>
                </div>
                <Image className="projImage" data={coverImage.responsiveImage} lazyLoad={true}/>
            </a>
        </Link>
    );
}
 
export default WorkCard;