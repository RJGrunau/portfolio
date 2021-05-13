import {useState, useEffect} from 'react'
import { client } from '../../libs/shopify-client'
import MainLayout from '../../components/layout-components/layout/layout'

import styles from "../../styles/products-page.module.css"
import Product from '../../components/products/indv-product/product'


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
    return(
        <MainLayout title="Store">
            <div className={styles.productsContainer}>
                {props.products.map((p,i) => (
                    <Product key={i} name={p.title} image={p.images[0]}/>
                ))}
            </div>
        </MainLayout>
    )
}

export default StorePage;