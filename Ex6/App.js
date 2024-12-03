import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Update from './Update'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path = '/Update/:id' element = {<Update/>}/>
        </Routes>
    </BrowserRouter>
  )
}
