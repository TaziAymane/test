import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpdateContact from "./Update"
import Ajouter from "./ajouter"
import NotFound from "./NotFound"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = "*" element = {<NotFound/>}/>
        <Route path = '/' element = {<Ajouter/>}/>
        <Route path = '/Update/:id' element = {<UpdateContact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
