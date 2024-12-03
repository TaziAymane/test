import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import UpdateNote from './update'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path = '/Update/:id' element = {<UpdateNote/>}/>
        </Routes>
    </BrowserRouter>
  )
}
