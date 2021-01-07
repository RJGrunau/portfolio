import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layout-components/layout/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Grunau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        hi
      </MainLayout>
    </>
     
  )
}
