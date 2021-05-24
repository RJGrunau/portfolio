import {useState, useEffect} from 'react'
import { request } from '../../libs/datocms'
import MainLayout from '../../components/layout-components/layout/layout'

import styles from "../../styles/products-page.module.css"
import Product from '../../components/products/indv-product/product'

const SHOPPAGE_QUERY = `
    query ShopPage {
        allProducts {
            productImages {
              responsiveImage {
                alt
                aspectRatio
                base64
                height
                sizes
                src
                srcSet
                title
                webpSrcSet
                width
              }
            }
            title
            productId
            price
            inventory
        }
    }
`
export async function getStaticProps() {
   const data = await request({
       query: SHOPPAGE_QUERY
   });

   return{
       props: {
           data,
       },
   }
}

const StorePage = ({data}) => {
    console.log(data)
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