import React from 'react'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Update } from './actions'

export default function UpdateNote() {
    const {id} = useParams()

    const panier = useSelector( data => data.panier.find(function (params) {
        return params.id === parseInt(id) 
    }))

    const [nom,setnom] = useState(panier.nom)
    const [quantite,setquantite] = useState(panier.quantite)
    const [prix,setprix] = useState(panier.prix_unitaire)   

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function UpdatePanier(e) {
        e.preventDefault();
        dispatch(Update({id:parseInt(id), nom:nom, quantite:parseInt(quantite), prix_unitaire:Number(prix)}))
        navigate("/")
    }

  return (
    <form onSubmit={UpdatePanier}>
        <input type='text' value={id}/><br/>
        <input type='text' value = {nom} onChange={(e) => {setnom(e.target.value)}}/><br/>
        <input type='text' value = {quantite} onChange={(e) => {setquantite(e.target.value)}}/><br/>
        <input type='text' value = {prix} onChange={(e) => {setprix(e.target.value)}}/><br/>
        <button>Update</button>
    </form>
  )
}
