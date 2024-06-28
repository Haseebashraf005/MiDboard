import React from "react";
import SideBar from "../layout/SideBar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Home</h2>     

        
        </Box>

      </Box>
    </>
  );
};

export default Home;
