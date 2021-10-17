import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import { styled, CssBaseline, Box } from '@mui/material/'

import { TopNavbar, Sidebar } from './components'
import { Home, Menu } from 'pages';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarStatus = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopNavbar sidebarOpen={sidebarOpen} handleSidebarStatus={handleSidebarStatus} />
      <Sidebar sidebarOpen={sidebarOpen} handleSidebarStatus={handleSidebarStatus} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
        </Switch>

      </Box>
    </Box>
  );
}

export default MainLayout