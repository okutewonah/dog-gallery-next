import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React from "react";
import DogCard from "../components/DogCard";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

interface Props {
  children: any;
}

const Page:React.FC<Props> = ({children}) => {
  return (
    <div id="page">
      <Header />
      <NavBar />
      <Box style={{ flexGrow: 1 }}>
        {children}
      </Box>
    </div>
  )
}

export default Page;