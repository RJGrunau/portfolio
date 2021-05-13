import  Image  from 'next/image'
import styles from "./product.module.css"

const Product = ({name,id,image}) => {
    // console.log(image);
    return ( 
        <div className={styles.productContainer}>
            <div>
                <Image src={image.src} layout={`responsive`} width={550} height={350}/>
            </div>
            <div>
                <span>{name}</span>
            </div>
        </div>
    );
}
 
export default Product;