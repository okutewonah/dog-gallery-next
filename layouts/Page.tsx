import React from "react";
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
    </div>
  )
}

export default Page;