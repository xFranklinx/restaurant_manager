import React from 'react'
import { Divider, IconButton, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import { MoreVert as EditIcon } from '@mui/icons-material'

const header = (id, text) => {
  let textDisplay = text ? text : id
  textDisplay = `${textDisplay[0].toUpperCase()}${textDisplay.slice(1).toLowerCase()}`

  return (
    {
      id,
      text: textDisplay
    }
  )
}

const headers = [
  header('name'),
  header('category'),
  header('price'),
  header('description'),
]



const MenuTable = ({ menuList }) => {


  const generateTableData = () => {
    if (!menuList) {
      const rows = []

      for (let i = 0; i < 3; i++) {
        rows.push(
          <TableRow key={i}>
            <TableCell>
              <IconButton>
                <EditIcon />
              </IconButton>
            </TableCell>
            {
              headers.map(header => {
                return (
                  <TableCell key={header.id}>
                    <Skeleton />
                  </TableCell>
                )
              })
            }
          </TableRow>
        )
      }

      return rows

    } else {
      const rows = []

      menuList.data.map(menuItem => {
        return rows.push(
          <TableRow key={menuItem.name}>
            <TableCell>
              <IconButton>
                <EditIcon />
              </IconButton>
            </TableCell>
            {
              headers.map(header => {
                return (
                  <TableCell key={header.id}>
                    {menuItem[header.id]}
                  </TableCell>
                )
              })
            }
          </TableRow>
        )
      })

      return rows
    }
  }

  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography variant='h5'>Restaurant Menu</Typography>
      </Toolbar>
      <Divider />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Edit
            </TableCell>
            {headers.map(header => {
              return (<TableCell key={header.id}>{header.text}</TableCell>)
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {generateTableData()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MenuTable