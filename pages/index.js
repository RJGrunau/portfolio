import Head from 'next/head'
import { request } from '../libs/datocms'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layout-components/layout/layout'

const HOMEPAGE_QUERY = `
  query HomePage ($limit: IntType){
    author {
      authorPhoto {
        responsiveImage (imgixParams: { fit: crop, w: 300, h: 300, auto: format }){
          alt
          src
          srcSet
          title
          aspectRatio
          base64
          bgColor
          width
          webpSrcSet
          height
        }
      }
      authorname
      jobtitle
    }
    allPosts (first: $limit) {
      id
      title
      excerpt
      date
      slug
      coverPhoto {
        alt
        responsiveImage (imgixParams: { fit: crop, w: 300, h: 300, auto: format }){
          sizes
          aspectRatio
          alt
          base64
          bgColor
          height
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
  })

  return {
    props: {
      data,
    },
  }
}

export default function Home({data}) {
  const posts = data.allPosts;
  return (
    <>
      <Head>
        <title>Robert Grunau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {posts.map(p => (
          <div key={p.id}>{p.title}</div>
        ))}
      </MainLayout>
    </>
     
  )
}
