import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Update } from './actions'

export default function UpdateContact() {

    const {id} = useParams()
    const product = useSelector(
        data => data.Products.find(function (params) {
            return params.id === parseInt(id) 
        })
    )

    const [Upproduct, setUpproduct] = useState({nom:product.nom,prix:product.prix,quantite:product.quantite})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function UT(e) {
        e.preventDefault();
        dispatch(
            Update(
            {
                id : parseInt(id),
                nom : Upproduct.nom,
                prix : parseInt(Upproduct.prix),
                quantite : parseInt(Upproduct.quantite)
            }
            )
        )
        navigate("/")
    }

  return (
    <form onSubmit={UT}>
        <input type='text' value={id}/><br/>
        <input type='text' value = {Upproduct.nom} onChange={(e) => {setUpproduct({...Upproduct,nom:e.target.value})}}/><br/>
        <input type='text' value = {Upproduct.prix} onChange={(e) => {setUpproduct({...Upproduct,prix:e.target.value})}}/><br/>
        <input type='text' value = {Upproduct.quantite} onChange={(e) => {setUpproduct({...Upproduct,quantite:e.target.value})}}/><br/>
        <button>Update Task</button>
    </form>
  )
}
