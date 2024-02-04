import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <UserContextProvider>
        <hr />
        <h1>Introduction about the Context API.</h1>
        <hr />
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
