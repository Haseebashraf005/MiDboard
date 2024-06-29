import React from 'react'
import SideBar from '../layout/SideBar'
import { Box, Stack, Typography } from '@mui/material'
import NavBar from '../layout/NavBar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Home = () => {
  return (
    <>

      <NavBar />
      <Box height={60} />
      <Box sx={{ display: 'flex' }}>

        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          {/* home page main section start */}

          <Grid container spacing={2}>
            <Grid item xs={8}>

              <Stack spacing={2} direction="row">

                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>


            </Grid>

            <Box height={20} />

            <Grid item xs={4}>


              <Stack spacing={2}>

                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>

                  </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>

                  </CardContent>
                </Card>
              </Stack>
            </Grid>

          </Grid>

          {/* <hr /> */}
          <Box height={30} />



          <Grid container spacing={2}>

            <Grid item xs={8}>


              <Card sx={{ maxWidth: 345 }}>
                <CardContent>


                </CardContent>
              </Card>



            </Grid>


            <Grid item xs={4}>

              <Stack spacing={2}>



                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>


                  </CardContent>
                </Card>
              </Stack>


            </Grid>



          </Grid>





          {/* home page main section end */}

        </Box>
      </Box>
    </>
  )
}

export default Home