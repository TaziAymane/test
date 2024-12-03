import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateTask } from './actions'

export default function Update() {

    const {id} = useParams()
    const Task = useSelector(
        data => data.Tasks.find(function (params) {
            return params.id === parseInt(id) 
        })
    )

    const [title, setTitle] = useState(Task.title)
    const [description, setDescription] = useState(Task.description)
    const [completed, setCompleted] = useState(Task.completed)
    const [date, setDate] = useState(Task.date)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function UT(e) {
        e.preventDefault();
        dispatch(
            UpdateTask(
            {
                id: parseInt(id),
                title: title,
                description: description,
                completed: completed,
                date: date
            }
            )
        )
        navigate("/")
    }

  return (
    <form onSubmit={UT}>
        <input type='text' value={id}/><br/>
        <input type='text' value = {title} onChange={(e) => {setTitle(e.target.value)}}/><br/>
        <input type='text' value= {description} onChange={(e) => {setDescription(e.target.value)}}/><br/>
        <input type='text' value= {completed} onChange={(e) => {setCompleted(e.target.value)}}/><br/>
        <input type='date' value= {date} onChange={(e) => {setDate(e.target.value)}}/><br/><br/>
        <button>Update Task</button>
    </form>
  )
}
