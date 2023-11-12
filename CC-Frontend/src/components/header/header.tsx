import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box, TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './cclogo.png';

const Header: React.FC = () => {
    return <div>
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: '#222120', px: 3}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="CC Logo" style={{ width: 50, height: 50, marginRight: 6 }}/>
                        <Typography variant="h6" component="div">
                            CritiqueCloud
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button color="inherit" component={Link} to="/signin">Sign In</Button>
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
                </Box>
            </Toolbar>
        </AppBar>
    </div>;
}
export default Header;