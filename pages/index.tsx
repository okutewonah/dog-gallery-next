import type { NextPage } from 'next'
import Page from "../layouts/Page";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Page>
      <main className={styles.main}></main>
    </Page>    
  )
}

export default Home
