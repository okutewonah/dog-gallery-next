import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import React from 'react';

interface Props {}

const NavBar:React.FC<Props> = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsOutlinedIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
          <Typography>
            DOG GALLERY
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;