
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Box className='top-footer  text-white py-5 mt-5'>
                    <h1>Be with Us</h1>
                    <h3>Be Connected With Us and We Care Your Emotion</h3>
            </Box>
            <Box>
                <Box sx={{ flexGrow: 1 , backgroundColor:'black', color:'white'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4}>
                          <Box>
                            <h2>Contact Information</h2>
                            <hr />
                            <p>1675/A, O.R Nizam Road Chittagong Bangladesh</p>
                                <p> <a href="/">https://car-fair.web.app/</a></p>
                                <p> <a href="/">info@car-fairbd.com</a></p>
                                <p>01596******</p>
                                <p>031-656565</p>
                                
                          </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <h2>More Information</h2> 
                            <hr />
                            <Box>
                                <ul>
                                    <ol>
                                        <p>Dashboard</p>
                                        <p>Update Car</p>
                                        <p>User Reviews</p>
                                        <p>Airports</p>
                                        <p>Maps</p>
                                    </ol>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <h2>Contact Us</h2> 
                            <hr />
                            <form>
                                <TextField sx={{backgroundColor: 'white', width: '80%', m:'5px' }} type="name" label="Your Name" variant="outlined" /><br />
                                <TextField sx={{backgroundColor: 'white', width: '80%', m:'5px' }} type="password" label="Password" variant="outlined" /><br />
                                <Button sx={{my:4, px:2}} variant="contained">Send</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;