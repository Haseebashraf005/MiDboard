import React from "react";
import SideBar from "../layout/SideBar";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>About</h2>         
        </Box>

      </Box>
    </>
  );
};

export default About;
