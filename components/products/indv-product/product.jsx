import  Image  from 'next/image'
import Link from 'next/link'
import styles from "./product.module.css"

const Product = ({name,id,image}) => {
    return ( 
        <div className={styles.productContainer}>
            <Link href={`id`}>
                <a className={styles.productLink}>
                    <div className={styles.productGrid}>
                        <div className={styles.productBacking}>
                            <Image src={image.src} layout={`responsive`} width={550} height={350}/>
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