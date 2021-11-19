import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
    const { user, logOut } = useAuth()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#4FA6F4' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'inline' }} >
                        CarDekho
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>

                        
                </Box>
                <Box>
                <Link style={{ textDecoration: 'none', color: 'white', marginRight: 1 }} to='/collection'><Button variant='contained' sx={{}}>Collections</Button></Link>
                        {user?.email && < Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'><Button variant='contained' sx={{mx:3}}>Dashboard</Button></Link>}
                    {!user?.email && <Link to='/login'><Button color="inherit" sx={{ color: 'white' }}>Login</Button></Link>}
                    {user?.email && <Typography sx={{ display: 'inline', right: 0 }}>{user.displayName}</Typography>}
                    {user?.email && <Button variant='contained' sx={{ color: 'white', backgroundColor: 'gray', m: 1 }} onClick={logOut}>Log out</Button>}
                </Box>
            </Toolbar>
        </AppBar>
        </Box >
    );
};

export default TopNavigation;