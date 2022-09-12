import { Box } from "@mui/system";
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
      <Box style={{flexGrow: 1}} mt={2}>
        <DogCard />
      </Box>
    </div>
  )
}

export default Page;