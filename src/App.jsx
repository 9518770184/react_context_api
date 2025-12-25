import { useState } from 'react'
import './App.css'
import { Employee } from './components/Employee.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  return (
    <>
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
      {/* <Employee/> */}
    </>
  )
}

export default App
