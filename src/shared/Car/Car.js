import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


const Car = ({ car }) => {
    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ boxShadow: '3px 3px 10px 3px gray', p:3 }}>
                <CardMedia
                    component="img"
                    height="300"
                    borderRadius="10px"
                    image={car.img}
                    alt="green iguana"
                />
                <Typography variant='h4'>
                    {car.name}
                </Typography>
                <Typography sx={{ textAlign: 'justify', p: 1 }}>
                    {car.description}
                </Typography>
                <Typography variant='h6'>
                    Price: {car.price}
                </Typography>
                <Link to={`/orders/${car._id}`}><Button variant='contained' sx={{backgroundColor: 'yellow', color: 'black'}}>purchase now</Button></Link>
            </Paper>
        </Grid>
    );
};

export default Car;
