import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box, TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './cclogo.png';

const Header: React.FC = () => {
    return <div>
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: '#222120', px: 3}}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 5 }}>
                    <img src={logo} alt="CC Logo" style={{ width: 50, height: 50, marginRight: 2 }}/>
                    <Typography variant="h6" component="div">
                        CritiqueCloud
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/signin">Sign In</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                    <Button color="inherit" component={Link} to="/categories">Categories</Button>
                    <TextField 
                        variant="outlined" 
                        size="small" 
                        placeholder="Search" 
                        sx={{ 
                            ml: 2, 
                            width: '15ch',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '15px',
                            },
                            backgroundColor: 'white',
                            borderRadius: '15px'
                        }} 
                    />
                </Box>
            </Toolbar>
        </AppBar>
    </div>;
}

export default Header;