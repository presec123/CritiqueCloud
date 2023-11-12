import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Category from './category/category';
import { useTheme } from '@mui/material/styles';
import SearchBar from '../searchBar/searchBar';

// Temporary mock data until database implementation
const categories = [
    { name: 'Hammers', imageUrl: 'path_to_hammer_image' },
    { name: 'Laptops', imageUrl: 'path_to_laptop_image' },
    { name: 'Screwdrivers', imageUrl: 'path_to_screwdriver_image' },
    { name: 'Smartphones', imageUrl: 'path_to_smartphone_image' },
    { name: 'Saws', imageUrl: 'path_to_saw_image' },
    { name: 'Tablets', imageUrl: 'path_to_tablet_image' },
    { name: 'Drills', imageUrl: 'path_to_drill_image' },
    { name: 'Headphones', imageUrl: 'path_to_headphones_image' },
    { name: 'Wrenches', imageUrl: 'path_to_wrench_image' },
    { name: 'Desktop Computers', imageUrl: 'path_to_desktop_computer_image' },
    { name: 'Pliers', imageUrl: 'path_to_pliers_image' },
    { name: 'Monitors', imageUrl: 'path_to_monitor_image' },
    { name: 'Nail Guns', imageUrl: 'path_to_nail_gun_image' },
    { name: 'Routers', imageUrl: 'path_to_router_image' },
    { name: 'Paint Brushes', imageUrl: 'path_to_paint_brush_image' },
    { name: 'External Hard Drives', imageUrl: 'path_to_external_hard_drive_image' }
];

  const CategoryList: React.FC = () => {
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const theme = useTheme();

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm) {
          setFilteredCategories(categories);
          return;
        }
    
        const filtered = categories.filter(category =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCategories(filtered);
      };

    const gridStyle = {
      justifyContent: 'flex-end', 
  
    };
    
    return (
        <div>
          <SearchBar onSearch={handleSearch} />
          <Grid container spacing={1} sx={gridStyle}>
            {filteredCategories.map((category, index) => (
              <Grid item key={index} xs={3}>
                <Category name={category.name} imageUrl={category.imageUrl} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    };
export default CategoryList;
