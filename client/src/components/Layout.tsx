
import React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Toolbar, Typography, Divider } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConstructionIcon from '@mui/icons-material/Construction';
import ExploreIcon from '@mui/icons-material/Explore';
import HardwareIcon from '@mui/icons-material/Hardware';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PaletteIcon from '@mui/icons-material/Palette';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
  { text: 'Crafting', icon: <ConstructionIcon />, path: '/crafting' },
  { text: 'Deep', icon: <ExploreIcon />, path: '/deep' },
  { text: 'FieldEx', icon: <NaturePeopleIcon />, path: '/fieldex' },
  { text: 'Fights', icon: <SportsKabaddiIcon />, path: '/fights' },
  { text: 'Gathering', icon: <HardwareIcon />, path: '/gathering' },
  { text: 'Glamour', icon: <PaletteIcon  />, path: '/glamour' },
];

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user } = useAuth0();
  
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
      </Toolbar>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" noWrap>
          {user?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {user?.email}
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <LogoutButton />
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Main>
        <Toolbar />
        {children}
      </Main>
    </Box>
  );
}

export default Layout;
