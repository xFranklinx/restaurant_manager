import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MenuTable from './components/MenuTable'

const Menu = () => {
  const [menuList, setMenuList] = useState(null)

  useEffect(() => {
    apiHandleGetMenu()
  }, [])

  const apiHandleGetMenu = async () => {
    const results = await axios.get('http://localhost:5000/api/v1/menuitems')
    setTimeout(() => {
      setMenuList(results.data)
    }, 1000);
    return results.data
  }

  return (
    <div>
      <MenuTable menuList={menuList} />
    </div>
  )
}

export default Menu