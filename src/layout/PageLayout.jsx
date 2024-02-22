import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
const PageLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet />
    </>
  )
}

export default PageLayout