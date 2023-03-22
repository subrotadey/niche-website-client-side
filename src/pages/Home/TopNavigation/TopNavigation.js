import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import useAuth from "../../../hooks/useAuth";
import { AppBar, Button, Stack, Typography } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon></CatchingPokemon>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} edge="start">
          <Link to='/'  style={{ textDecoration: 'none', color: 'white' }}>Car Fair</Link>
        </Typography>
        <Stack direction="row" spacing={1}>
            <Link style={{ textDecoration: 'none', color: 'white', marginRight: 1 }} to='/collection'><Button color="inherit" sx={{ color: 'white' }}>Collections</Button></Link>
            {user?.email && < Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> <Button color="inherit" sx={{ color: 'white' }}>Dashboard</Button></Link>}
            {!user?.email && <Link to='/login'><Button color="inherit" sx={{ color: 'white' }}>Login</Button></Link>}
            {user?.email && <Typography sx={{ display: 'inline', right: 0 }}><Button color="inherit" sx={{ color: 'white' }} disabled>{user.email}</Button></Typography>}
            {user?.email && <Button variant='contained' sx={{ color: 'white', backgroundColor: 'gray', m: 1 }} onClick={logOut}>Log out</Button>}
        </Stack>
        <Stack>
                    
                </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;

/*
<Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#4FA6F4' }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'inline' }} >
                        Car Fair
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>

                        <Link style={{ textDecoration: 'none', color: 'white', marginRight: 1 }} to='/collection'> Collections</Link>
                        {user?.email && < Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> Dashboard</Link>}
                </Box>
                <Box>
                    {!user?.email && <Link to='/login'><Button color="inherit" sx={{ color: 'white' }}>Login</Button></Link>}
                    {user?.email && <Typography sx={{ display: 'inline', right: 0 }}>{user.displayName}</Typography>}
                    {user?.email && <Button variant='contained' sx={{ color: 'white', backgroundColor: 'gray', m: 1 }} onClick={logOut}>Log out</Button>}
                </Box>
            </Toolbar>
        </AppBar>
        </Box >
*/
