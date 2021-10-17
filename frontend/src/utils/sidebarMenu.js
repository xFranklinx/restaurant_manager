import React from 'react'
import {
  Home as HomeIcon,
  RestaurantMenu as MenuIcon
} from '@mui/icons-material'

const sidebarItem = (text, url, icon) => ({ text, url, icon })

const sidebarMenu = [
  sidebarItem('Home', '/', <HomeIcon />),
  sidebarItem('Menu', '/menu', <MenuIcon />),
]

export default sidebarMenu