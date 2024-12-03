import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Update } from './actions'

export default function UpdateContact() {

    const {id} = useParams()
    const contact = useSelector(
        data => data.Contacts.find(function (params) {
            return params.id === parseInt(id) 
        })
    )

    const [Upcontact, setUpcontact] = useState({nom:contact.nom,telephone:contact.telephone,email:contact.email})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function UT(e) {
        e.preventDefault();
        dispatch(
            Update(
            {
                id : parseInt(id),
                nom : Upcontact.nom,
                telephone : Upcontact.telephone,
                email : Upcontact.email
            }
            )
        )
        navigate("/")
    }

  return (
    <form onSubmit={UT}>
        <input type='text' value={id}/><br/>
        <input type='text' value = {Upcontact.nom} onChange={(e) => {setUpcontact({...Upcontact,nom:e.target.value})}}/><br/>
        <input type='text' value = {Upcontact.telephone} onChange={(e) => {setUpcontact({...Upcontact,telephone:e.target.value})}}/><br/>
        <input type='text' value = {Upcontact.email} onChange={(e) => {setUpcontact({...Upcontact,email:e.target.value})}}/><br/>
        <button>Update Task</button>
    </form>
  )
}
