import  { Image }  from 'react-datocms'
import Link from 'next/link'
import styles from "./product.module.css"

const Product = ({name,id,image}) => {
    return ( 
        <div className={styles.productContainer}>
            <Link href={`store/${id}`}>
                <a className={styles.productLink}>
                    <div className={styles.productGrid}>
                        <div className={styles.productBacking}>
                            <Image data={image.responsiveImage}/>
                        </div>
                        <div className={styles.productName}>
                            <span>{name}</span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
 
export default Product;