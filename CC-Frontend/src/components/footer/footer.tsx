import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ 
            backgroundColor: '#222120', 
            color: '#fff', 
            position: 'fixed', 
            bottom: 0, 
            width: '100%', 
            padding: 2,
            textAlign: 'center'
        }}>
            <Typography variant="body1">
                © 2023 CritiqueCloud
            </Typography>
        </Box>
    );
}

export default Footer;