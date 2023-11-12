import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

interface CategoryProps {
  name: string;
  imageUrl: string;
}

const Category: React.FC<CategoryProps> = ({ name, imageUrl }) => {
    const theme = useTheme();
    const cardStyle = {
      maxWidth: 200,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary
    };
  
    return (
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          height="100"
          image={imageUrl}
          alt={name}
        />
        <CardContent>
        </CardContent>
      </Card>
    );
  };

export default Category;
