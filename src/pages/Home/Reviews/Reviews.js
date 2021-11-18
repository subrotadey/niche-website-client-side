import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useReviews from '../../../hooks/useReviews';
import Review from '../Home/Review/Review';

const Reviews = () => {
    const reviews = useReviews()
    return (
        <Container>
            <Typography variant='h3' sx={{ m: 4 }}>
                What our Clients says
                <hr style={{ width: '50%', textAlign: 'center' }} />
            </Typography>
            <Grid container spacing={2}>
                {reviews?.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)}
            </Grid>
        </Container>
    );
};

export default Reviews;