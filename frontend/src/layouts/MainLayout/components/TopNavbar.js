import React from 'react'
import { Link } from 'react-router-dom'
import { styled, AppBar as MuiAppBar, Toolbar, Typography, IconButton } from '@mui/material/'
import MenuIcon from '@mui/icons-material/Menu';

import config from 'config/config'
const { sidebarWidth } = config

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: sidebarWidth,
    width: `calc(100% - ${sidebarWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopNavbar = ({ sidebarOpen, handleSidebarStatus }) => {

  return (
    <AppBar position="fixed" open={sidebarOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleSidebarStatus}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(sidebarOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
          <Typography variant="h6" noWrap component="div">
            Restaurant Manager
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar