import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return <div>
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: '#222120', justifyContent: 'space-between', px: 3}}>
                <Typography variant="h6" component="div">
                    CritiqueCloud
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" component={Link} to="/signin">Sign In</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    <Button color="inherit" component={Link} to="/categories">Categories</Button>
                </Box>
            </Toolbar>
        </AppBar>
    </div>;
}
export default Header;