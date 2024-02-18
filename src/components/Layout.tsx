import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppDrawer from './AppDrawer';
import { Button, Drawer } from '@mui/material';
import ThemeSwitcher from './ThemeSwitcher';
import { signOut, useSession } from 'next-auth/react';
import { config } from '@/utils/config';

const drawerWidth = 240;

interface Props {
  window?: () => Window
  children: React.ReactNode
}

export default function Layout(props: Props) {
  const { data: sessionData } = useSession()
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const fetchData = async ()=>{
    const response = await fetch(`${config.apiBaseUrl}/app`)
    const dataFromServer = await response.json()
    console.log(dataFromServer)
  }

  React.useEffect(()=>{
    fetchData()
  },[])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${sessionData ? drawerWidth : 0 }px)` },
          ml: { sm: `${sessionData ? drawerWidth : 0 }px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" noWrap component="div">
              THE FOODIES
            </Typography>
            <Box>
              <ThemeSwitcher />
              {/* <IconButton></IconButton> */}
              {
                sessionData && <Button variant='contained' color="secondary" sx={{ ml: 2 }} onClick={()=> signOut({ callbackUrl: '/' })}>Logout</Button>
              }
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      { sessionData &&
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <AppDrawer/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <AppDrawer/>
        </Drawer>
      </Box>
      }
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
