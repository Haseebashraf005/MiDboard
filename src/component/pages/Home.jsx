import React from 'react'
import SideBar from '../layout/SideBar'
import { Box, Typography } from '@mui/material'
import NavBar from '../layout/NavBar'

const Home = () => {
  return (
    <>

      <NavBar/>         
      <Box sx={{ display: 'flex' }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>

        </Box>
      </Box>
    </>
  )
}

export default Home