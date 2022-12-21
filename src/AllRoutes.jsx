import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProfileCreation from './pages/ProfileCreation/ProfileCreation'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'
import Home from './pages/Home/Home'
import ProfileView from './pages/ProfileView/ProfileView'
import ProjectView from './pages/ProjectView/ProjectView'
import DepartmentUsers from './pages/DepartmentUsers/DepartmentUsers'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile/create' element={<ProfileCreation/>} />
      <Route path='/profile/view' element={<ProfileView/>} />
      <Route path='/profile/edit' element={<ProfileEdit/>} />
      <Route path='/project/view' element={<ProjectView/>} />
      <Route path='/user/:id' element={<DepartmentUsers/>} />
      <Route path='/project/add' element={<DepartmentUsers/>} />
    </Routes>
  )
}

export default AllRoutes