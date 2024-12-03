import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Delete, ImportantNote, DeleteImportant } from './actions'
import { Link } from 'react-router-dom'

export default function Home() {
    const AllNotes = useSelector(data => data.Note)
    const Important = useSelector(data => data.Important)

    const lastID = AllNotes.length+1
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    function AN(e) {
        e.preventDefault();
        dispatch(Add({id:lastID, title:title, content:content}))
    }

    function handler(id,note) {
        const IT = Important.find(function (params) {
            return params.id === parseInt(id)
        })
        if (IT) {
            alert('alraedy exist')
        }else{
            dispatch(ImportantNote(note))
        }
        // console.log(note);
    }
  return (
    <>
    <form onSubmit={AN}>
        id <br/>
        <input type='text' value={lastID} /><br/>
        titre <br/>
        <input type='text' onChange={(e)=>setTitle(e.target.value)} /><br/>
        contenu <br/>
        <textarea onChange={(e)=>setContent(e.target.value)} ></textarea><br/>
        <button>Add Note</button>
    </form>
    <div className='row container'>
    <div className='col-5'>
        <h1>all notes</h1>
    {   AllNotes.length > 0?
        AllNotes.map(function (params, i) {
            return <div key={i} style={{borderRadius:"10px", textAlign:"center",padding:"5px", margin:"20px",width:"400px" ,border:"2px solid"}}>
                <h1>{params.title}</h1>
                <p style={{padding:"10px",textAlign:"justify"}} >{params.content}</p>
                <button className='btn btn-danger'
                        onClick={()=>{dispatch(Delete(params.id))}}
                >Delete</button>
                &ensp;
                <Link to={`/Update/${params.id}`}>
                    <button className='btn btn-success'>Update</button>
                </Link>
                &ensp;
                <button className='btn btn-primary' 
                        onClick={()=>{handler(params.id,params)}}
                >Important</button>
            </div>
        })
        :<p>no notes</p>
    }
    </div>
    <div className='col-5'>
        <h1>Important notes</h1>
        {
            Important.length > 0 ?
            Important.map(function (params, i) {
                return <div key={i} style={{borderRadius:"10px", textAlign:"center",padding:"5px", margin:"20px",width:"400px" ,border:"2px solid"}}>
                    <h1>{params.title}</h1>
                    <p style={{padding:"10px",textAlign:"justify"}} >{params.content}</p>
                    <button className='btn btn-danger'
                            onClick={()=>{dispatch(DeleteImportant(params.id))}}
                    >Delete</button>
                </div>
            })
            :<p>no notes</p>
        }
    </div>
    </div>
    </>
  )
}
//Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi non consequuntur minus nulla vero iste iusto id expedita nisi, nam aperiam doloribus ad dolorum libero porro. Corrupti adipisci nulla iste!
