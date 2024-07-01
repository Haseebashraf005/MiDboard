import React from 'react'
import SideBar from '../layout/SideBar'
import { Box, Divider, Stack, Typography } from '@mui/material'
import NavBar from '../layout/NavBar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WalletIcon from '@mui/icons-material/Wallet';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccordianHome from '../layout/AccordianHome';
import BarChart from '../layout/chart/BarChart';
import "./home.css"

const Home = () => {
  return (
    <div className='bgcolor-main'>

      <NavBar />
      <Box height={60} />
      <Box sx={{ display: 'flex' }}>

        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          {/* home page main section start */}

          <Grid container spacing={2}>
            <Grid item xs={8}>

              <Stack spacing={2} direction="row">

                <Card sx={{ minWidth: "49%" , minHeight:190 , color:"white"}} className='gradient-1'>
                  <CardContent style={{marginTop:"20px"}}>
                    <div className="earning-icon">
                      <WalletIcon />
                    </div>
                    <div className="earning-desc">
                      <Stack >

                        <span>$500.00</span>
                        <span>Total Earning</span>

                      </Stack>
                    </div>

                  </CardContent>
                </Card>

                <Card sx={{ minWidth: "49%" ,color:"white"}} className='gradient-2'>
                <CardContent style={{marginTop:"20px"}}>
                    <div className="earning-icon">
                      <WalletIcon />
                    </div>
                    <div className="earning-desc">
                      <Stack >

                        <span>$900.00</span>
                        <span>Total Order</span>

                      </Stack>
                    </div>

                  </CardContent>
                </Card>
              </Stack>


            </Grid>


            <Grid item xs={4}>


              <Stack spacing={2}>

                <Card sx={{color:"white"}}>
                  <CardContent className="flex gradient-1" >

                    <div className="icon-container ">
                      <StorefrontIcon />
                    </div>

                    <div className="des-container">

                      <Stack>

                        <span className='amount'>$203K</span>
                        <span className='amount-title'>Total Income</span>

                      </Stack>

                    </div>


                  </CardContent>
                </Card>

                <Card sx={{color:"white"}}>
                  <CardContent className="flex gradient-2">

                    <div className="icon-container ">
                      <ProductionQuantityLimitsIcon />
                    </div>

                    <div className="des-container">

                      <Stack>

                        <span className='amount'>$147K</span>
                        <span className='amount-title'>Total Income</span>

                      </Stack>

                    </div>


                  </CardContent>
                </Card>
              </Stack>
            </Grid>

          </Grid>


          {/* <hr /> */}

          <Box height={30} />



          <Grid container spacing={2}>

            <Grid item xs={8}>


              <Card sx={{ height: "60vh" }}>
                <CardContent>

              <BarChart/>
                </CardContent>
              </Card>



            </Grid>



            <Grid item xs={4}>

              <Stack spacing={2}>



                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                  <div className="earning-desc" style={{marginBlock:"20px"}}>
                     

                        
                        <span className='amount'>Popular Products</span>

                      
                    </div>  

                    <AccordianHome />


                    <Divider/>
                    <Divider/>
                    <Divider/>
                    
                  </CardContent>
                </Card>
              </Stack>


            </Grid>



          </Grid>






          {/* home page main section end */}

        </Box>
      </Box>
    </div>
  )
}

export default Home