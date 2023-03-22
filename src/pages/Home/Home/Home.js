import { Box } from '@mui/system';
import React from 'react';
import Cars from '../../../shared/Cars/Cars';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <Box>
            <TopBanner></TopBanner>
            <Cars></Cars>
            <Reviews></Reviews>
        </Box>
    );
};

export default Home;