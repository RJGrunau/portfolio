import {useState, useEffect} from 'react'

import MainLayout from '../../components/layout-components/layout/layout'

import styles from "../../styles/products-page.module.css"
import Product from '../../components/products/indv-product/product'


export const getServerSideProps = async (context) => {
   
}

const StorePage = (props) => {
    return(
        <MainLayout title="Store">
           STORE
            {/* <div className={styles.productsContainer}>
                {props.products.map((p,i) => (
                    <Product key={i} name={p.title} id={p.id} image={p.images[0]}/>
                ))}
            </div> */}
        </MainLayout>
    )
}

export default StorePage;