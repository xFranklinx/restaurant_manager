import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  )
}

export default App