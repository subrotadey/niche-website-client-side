import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/blue-jeep-parking-public-zone.jpg'
import { Link } from 'react-router-dom';

const bannerBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(45, 64, 81 ,0.6)',
    backgroundBlendMode: 'dark'
}


const TopBanner = () => {
    return (
        <Box style={bannerBg} sx={{ mt: 2 ,minHeight:"600px"}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{mt:10}}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant='h4' sx={{ fontWeight: 700 ,color:'black'}}>
                                Discover Your Best Cover
                            </Typography>
                            <Typography sx={{paddingY:5}}>
                                we provide world class auto electrical cars.There is a huge collection of electrical car . We got world Best Dealer Award in 2020.
                            </Typography>
                            <Link to='/collection'><Button variant='contained' sx={{backgroundColor:'green'}}>Explore Now</Button></Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopBanner;