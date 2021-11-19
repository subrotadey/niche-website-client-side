import React from 'react';
import Grid from '@mui/material/Grid';
import {  Typography } from '@mui/material';
import img from '../../../../images/banner.jpg'
import Container from '@material-ui/core/Container';

const Banner = () => {
    return (
        <Container sx={{ m:3}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src={img}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant='h4' sx={{ fontWeight: 700 ,color:'black'}}>
                About BMW Cars
            </Typography>
            <Typography sx={{paddingY:5}}>
                With the three brands, BMW, MINI and Rolls-Royce Motor Cars, the BMW Group has its sights set firmly on the premium sector of the international automobile market. To achieve its aims, the company knows how to deploy its strengths with an efficiency that is unmatched in the automotive industry. From research and development to sales and marketing, BMW Group is committed to the very highest in quality for all its products and services. The company's success to date is proof of this strategy's correctness. BMW was officially founded as a public company in 1922, but traces its origins to the pioneering days of German aviation all the way back to 1913. Two of these pioneering men, Karl Rapp and Gustav Otto, are credited by BMW as the "founding fathers". However, the company was actually founded by three men: Josef Popp, Max Friz, and Camillo Castiglioni. These men brought BMW through many turbulent times in the company's early life, as well as taking the company public in 1922 to form BMW AG.
            </Typography>             
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;