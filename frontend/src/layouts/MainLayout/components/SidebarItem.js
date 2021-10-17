import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material/';

const SidebarItem = ({ text, url, icon }) => {
  return (
    <NavLink to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItem button key={text}>
        <ListItemIcon sx={{ marginLeft: 0.4 }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </NavLink>
  )
}

SidebarItem.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.object
}

export default SidebarItem