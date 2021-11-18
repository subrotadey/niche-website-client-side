
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Box className='top-footer  text-white py-5 mt-5'>
                    <h1>Be with Us</h1>
                    <h3>Get healthy service, treatment and solutions to your problems from our experts!</h3>
            </Box>
            <Box>
                <Box sx={{ flexGrow: 1 , backgroundColor:'black', color:'white'}}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4}>
                          <Box>
                            <h2>Contact Information</h2>
                            <hr />
                            <p>1675/A, O.R Nizam Road Chittagong Bangladesh</p>
                                <p> <a href="/">http://cscrbd.com/</a></p>
                                <p> <a href="/">info@cscrbd.com</a></p>
                                <p>031-656565</p>
                                <Box>
                                    <i className="fab fa-facebook-f px-2 fs-4"></i>
                                    <i className="fab fa-twitter px-4 fs-4"></i>
                                    <i className="fab fa-instagram px-2 fs-4"></i>
                                </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <h2>Contact Information</h2> 
                            <hr />
                            <Box>
                                <ul>
                                    <ol>
                                        <p><a href="/">Countries</a></p>
                                        <p><a href="/">Religion</a></p>
                                        <p><a href="/">Districts</a></p>
                                        <p><a href="/">Airports</a></p>
                                        <p><a href="/">Hotels</a></p>
                                        <p><a href="/">Interested Places</a></p>
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