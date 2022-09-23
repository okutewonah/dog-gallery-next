import type { NextPage } from 'next'
import Page from "../layouts/Page";
import axios from 'axios'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Link from 'next/link';

interface Props {
  dogs: any
  fetchError: any
}

const Home: NextPage<Props> = props => {
  return (
    <Page>
      <main>
        <ImageList variant='masonry' cols={5} gap={8}>
          {
            props.dogs.map((dog: any) => (
              // <DogCard breed={dog.id}  />
              <Link href='/' passHref>
              <ImageListItem key={dog.id} className='img-list' sx={{ xs: { cursor: 'pointer' }, cursor: 'pointer' }}>
                <img 
                  src={`${dog.image.url}`} 
                  srcSet={`${dog.image.url}`}
                  alt={dog.name}
                  loading='lazy' 
                />
                <ImageListItemBar position='below' title={dog.name} />
              </ImageListItem>
              </Link>
            ))
          }
        </ImageList>
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
    // console.log(dogs)
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
