import type { NextPage } from 'next'
import Page from "../layouts/Page";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import DogCard from '../components/DogCard';

interface Props {
  dogs: any
  fetchError: any
}

const Home: NextPage<Props> = props => {
  return (
    <Page>
      <main className={styles.main}>
        <div>
          <ImageList variant='masonry' cols={3} gap={8}>
            {
              props.dogs.map((dog: any) => (
                // <DogCard breed={dog.id}  />
                <ImageListItem key={dog.id}>
                  <img 
                    src={`${dog.image.url}?w=248&fit=crop&auto=format`} 
                    srcSet={`${dog.image.url}`}
                    alt={dog.name}
                    loading='lazy' 
                  />
                <ImageListItemBar position='below' title={dog.name} />
                </ImageListItem>
              ))
            }
          </ImageList>
        </div>
      </main>
    </Page>    
  )
}

export async function getStaticProps(context: any) {
  let dogs: any = null
  let fetchError: any = null

  try {
    const res = await axios.get('https://api.thedogapi.com/v1/breeds/')
    dogs = res.data
    console.log(dogs)
  } catch (err) {
      console.log("======>> Error fetching dogs: ", err)
      fetchError = !!err
  }

  return {
    props: {
      dogs,
      fetchError
    }
  }
}

export default Home
