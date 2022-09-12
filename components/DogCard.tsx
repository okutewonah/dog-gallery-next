import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface Props {}

const DogCard:React.FC<Props> = () => {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/assets/images/dog-1.jpg"
          alt="dog"
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Golden Retriever
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DogCard;