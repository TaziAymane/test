import React from 'react'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Update } from './actions'

export default function UpdateNote() {
    const {id} = useParams()

    const AllNotes = useSelector( data => data.Note.find(function (params) {
        return params.id === parseInt(id) 
    }))

    const [Upnote, setUpNote] = useState({title:AllNotes.title,content:AllNotes.content})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function UN(e) {
        e.preventDefault();
        dispatch(Update({id:id, title:Upnote.title, content:Upnote.content}))
        navigate("/")
    }

  return (
    <form onSubmit={UN}>
        <input type='text' value={id}/><br/>
        <input type='text' value = {Upnote.title} onChange={(e) => {setUpNote({...Upnote,title:e.target.value})}}/><br/>
        <textarea value={Upnote.content} onChange={(e) => {setUpNote({...Upnote,content:e.target.value})}}  style={{height:"150px"}}></textarea><br/>        <button>Update Note</button>
    </form>
  )
}
