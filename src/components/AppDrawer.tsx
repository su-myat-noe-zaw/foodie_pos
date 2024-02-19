import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Logo from '../assets/logo.png'
import Image from 'next/image';
import { ThemeContext } from '@/utils/themeContext';
import { Box, Typography } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CategoryIcon from '@mui/icons-material/Category';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AdjustIcon from '@mui/icons-material/Adjust';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  {
    label: "orders",
    icon: <AssignmentTurnedInIcon/>,
    route: "/backoffice/orders"
  },
  {
    label: "menu categories",
    icon: <CategoryIcon/>,
    route: "/backoffice/menu-categories"
  },
  {
    label: "menus",
    icon: <RestaurantMenuIcon/>,
    route: "/backoffice/menus"
  },
  {
    label: "addon categories",
    icon: <AddBoxIcon/>,
    route: "/backoffice/addon-categories"
  },
  {
    label: "addons",
    icon: <AdjustIcon/>,
    route: "/backoffice/addons"
  },
  {
    label: "tables",
    icon: <TableRestaurantIcon/>,
    route: "/backoffice/tables"
  },
  {
    label: "locations",
    icon: <LocationOnIcon/>,
    route: "/backoffice/locations"
  },
  {
    label: "settings",
    icon: <SettingsIcon/>,
    route: "/backoffice/settings"
  },
]

const AppDrawer = () =>{
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const router = useRouter()

  // React.useEffect(()=>{
  //   console.log();
    
  // },[])
  return (
  <div>
    {/* <Toolbar /> */}
    <Divider />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Image
          src={Logo}
          alt="the foodies"
          style={{ width: '90px', height: '90px' }}
        />
      <Typography variant='h5' sx={{ fontWeight: 'bold' }}>THE FOODIES</Typography>
    </Box>
    <Divider />
    <List>
      {menuItems.map((item, index) => (
        <Link key={index} href={item.route} style={{ textDecoration: "none" }}>
          <ListItem key={index} disablePadding
            sx={{
              backgroundColor:
                router.pathname === item.route ? theme.palette.primary.main : 'inherit',
            }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: theme.palette.mode === "dark" || router.pathname === item.route ? theme.palette.primary.contrastText : theme.palette.text.primary }}>
                { item.icon } 
              </ListItemIcon>
              <ListItemText primary={item.label}
                sx={{
                  textTransform: 'capitalize',
                  color: theme.palette.mode === "dark" || router.pathname === item.route ? theme.palette.primary.contrastText : theme.palette.text.primary
                }} />
            </ListItemButton>
          </ListItem>
          { index === 6 && <Divider sx={{ my: 1 }}></Divider> }
        </Link>
      ))}
    </List>
  </div>
);
}

export default AppDrawer;

