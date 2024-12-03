import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Add } from "./actions"
import { Delete } from "./actions"
import { Link } from "react-router-dom"

export default function Ajouter() {
    const lastid = useSelector(data => data.Contacts.length+1)
    const contact = useSelector(data => data.Contacts)
    const [Newcontact, setNewcontact] = useState({nom:'',telephone:'',email:''})
    const [search, setSearch] = useState('')
    const [temp, setTemp] = useState('')
    const dispatch = useDispatch()

    function AddContact(e) {
        e.preventDefault()
        dispatch(Add({id:lastid,nom:Newcontact.nom,telephone:Newcontact.telephone,email:Newcontact.email}))    
    }
    
    function handler() {
        setSearch(temp)
    }

  return (
    <>
    <form onSubmit={AddContact}>
        id <br/>
        <input placeholder="id" value={lastid}/><br/>
        nom <br/>
        <input placeholder="nom" onChange={(e)=>setNewcontact({...Newcontact,nom:e.target.value})}/><br/>
        telephone <br/>
        <input placeholder="telephone" onChange={(e)=>setNewcontact({...Newcontact,telephone:e.target.value})} /><br/>
        email <br/>
        <input placeholder="email" onChange={(e)=>setNewcontact({...Newcontact,email:e.target.value})} /><br/>
        <button>Ajouter</button>
    </form>
    <div>
    <table border={1}>
        <tr>
            <th>id</th>
            <th>nom</th>
            <th>telephone</th>
            <th>email</th>
            <th>action</th>
        </tr>
        {
            contact.map(function (params, i) {
                return <tr key={i}>
                    <td>{params.id}</td>
                    <td>{params.nom}</td>
                    <td>{params.telephone}</td>
                    <td>{params.email}</td>
                    <td>
                        <Link to={`/Update/${params.id}`} >
                            <button>Update</button>
                        </Link>
                        <button 
                            onClick={() => {dispatch(Delete(parseInt(params.id)))}}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
    </table>
    <br/>
    <input type="text" onChange={(e)=>setTemp(e.target.value)} style={{border:"2px solid"}}/>
    <button onClick={handler}>search</button>
    <table border={1}>
        <tr><th>id</th><th>nom</th><th>telephone</th><th>email</th></tr>
        {
            contact.length>0?
                contact.filter(function (params) {
                    return params.nom === search
                }).map(function (params) {
                    return <tr><td>{params.id}</td><td>{params.nom}</td><td>{params.telephone}</td><td>{params.email}</td></tr>
                })
            :<tr></tr>
        }
    </table>
    </div>
    </>
  )
}
