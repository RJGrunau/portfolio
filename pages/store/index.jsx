import { client } from '../../libs/shopify-client'
import MainLayout from '../../components/layout-components/layout/layout'

import styles from "../../styles/products-page.module.css"


export const getServerSideProps = async (context) => {
    const products = await client.product.fetchAll();
    const info = await client.shop.fetchInfo();
    
    return {
        props: {
            infos: JSON.parse(JSON.stringify(info)),
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

const StorePage = (props) => {
    console.log(props);
    return(
        <MainLayout>
            <div className={styles.productContainer}>
                products go here
            </div>
        </MainLayout>
    )
}

export default StorePage;