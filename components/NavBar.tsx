import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import React from 'react';
import Link from 'next/link';

interface Props {}

const NavBar:React.FC<Props> = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsOutlinedIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
          <Link href={'/'} passHref>
            <Typography sx={{flexGrow: 1}}>
              DOG GALLERY
            </Typography>
          </Link>          
          <Button color='inherit'>About Me</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;