import styles from "./product.module.css"

const Product = ({name,id,image}) => {
    return ( 
        <div className={styles.productContainer}>
            <div>
                <span>{name}</span>
            </div>
        </div>
    );
}
 
export default Product;