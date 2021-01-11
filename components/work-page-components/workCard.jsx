import Link from 'next/link';
import { Image } from 'react-datocms';
import styles from './wordCard.module.css';


const WorkCard = ({slug,title,coverImage}) => {
    return ( 
        <Link href={slug} className={styles.workCard}>
            <Image className={styles.projImage} data={coverImage.responsiveImage}/>
        </Link>
    );
}
 
export default WorkCard;