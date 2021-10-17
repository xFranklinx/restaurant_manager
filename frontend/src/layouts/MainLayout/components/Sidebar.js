import React from 'react';
import { styled, Drawer as MuiDrawer, List, Divider, IconButton } from '@mui/material/';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import SidebarItem from './SidebarItem';
import sidebarMenu from 'utils/sidebarMenu';
import config from 'config/config'
const { sidebarWidth } = config


const openedMixin = (theme) => ({
  width: sidebarWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = ({ sidebarOpen, handleSidebarStatus }) => {
  return (
    <Drawer variant="permanent" open={sidebarOpen}>
      <DrawerHeader>
        <IconButton onClick={handleSidebarStatus}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarMenu.map(item => {
          return (
            <SidebarItem key={item.text} text={item.text} url={item.url} icon={item.icon} />
          )
        })}
      </List>
    </Drawer>
  );
}

export default Sidebar