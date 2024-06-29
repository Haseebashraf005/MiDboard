import React from 'react'
import SideBar from '../layout/SideBar'
import { Box, Typography } from '@mui/material'
import NavBar from '../layout/NavBar'

const Setting = () => {
  return (
    <>
      <NavBar/>  


<Box height={50} />       

      <Box sx={{ display: 'flex' }}>
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Setting</h1>
   
      </Box>
      </Box>
    </>
  )
}

export default Setting