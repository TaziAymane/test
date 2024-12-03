import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTask } from './actions'
import { DeleteTask } from './actions'
import { Link } from 'react-router-dom'

export default function Ajouter() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState('')
    const [date, setDate] = useState('')

    const lastID = useSelector(data => data.Tasks.length+1)
    const Tasks = useSelector(data => data.Tasks)
    const dispatch = useDispatch()

    function AT(e){
        e.preventDefault();
        dispatch(AddTask({
            id: parseInt(lastID),
            title: title,
            description: description,
            completed: completed,
            date: date
        }))
    }
    
  return (
    <div>
    <form onSubmit={AT}>
        <input type='text' value={lastID}/>
        <br/>
        <input type='text' 
               placeholder='Title' 
               onChange={(e) => {setTitle(e.target.value)}}/>
        <br/>
        <input type='text' 
               placeholder='Description' 
               onChange={(e) => {setDescription(e.target.value)}}/>
        <br/>
        <input type='text' 
               placeholder='Completed' 
               onChange={(e) => {setCompleted(e.target.value)}}/>
        <br/>
        <input type='date' 
               placeholder='Date' 
               onChange={(e) => {setDate(e.target.value)}}/>
        <br/>
        <button>Add Task</button>
    </form>
    <br/><br/>
    <table border={1}>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>completed</th>
            <th>date</th>
            <th>action</th>
        </tr>
        {
            Tasks.map(function (params, i) {
                return <tr key={i}>
                    <td>{params.id}</td>
                    <td>{params.title}</td>
                    <td>{params.description}</td>
                    <td>{params.completed}</td>
                    <td>{params.date}</td>
                    <td>
                        <Link to={`/Update/${params.id}`} >
                            <button>Update</button>
                        </Link>
                        {/* &ensp; */}
                        <button 
                                onClick={() => {dispatch(DeleteTask(parseInt(params.id)))}}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
    </table>
    </div>
  )
}
