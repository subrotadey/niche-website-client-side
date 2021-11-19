import { Box } from '@mui/system';
import React from 'react';
import Cars from '../../../shared/Cars/Cars';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';
import TopNavigation from '../TopNavigation/TopNavigation';
import Footer from '../Footer/Footer'
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <Box>
            <TopNavigation></TopNavigation>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
            <Footer></Footer>
        </Box>
    );
};

export default Home;