import Head from 'next/head'
import { request } from '../libs/datocms'
import MainLayout from '../components/layout-components/layout/layout'
import BlogBlock from '../components/home-page/blog-block/blogBlock'
import AuthorBlock from '../components/home-page/author-block/authorBlock'
import GalleryBlock from '../components/home-page/gallery-block/gallery-block'

const HOMEPAGE_QUERY = `
  query HomePage ($limit: IntType){
    author {
      authorname
      jobtitle
    }
    page(filter: {name: {eq: "Home"}}) {
      content
      pageImage {
        responsiveImage {
          aspectRatio
          alt
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
    }
    allPosts (first: $limit) {
      id
      title
      excerpt
      date
      slug
      coverPhoto {
        alt
        responsiveImage (imgixParams: { fit: fill, w: 400, h: 400, auto: format }){
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
  const authData = data.author
  const page = data.page;
  return (
    <>
      <Head>
        <title>Robert Grunau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <GalleryBlock pageImage={page.pageImage}/>
        <AuthorBlock authData={authData} shortBio={page.content}/>
        <BlogBlock posts={posts}/>
      </MainLayout>
    </>
     
  )
}
