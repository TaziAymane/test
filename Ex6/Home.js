import React, { useState } from 'react'
import { Add, Delete } from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home() {
    const panier = useSelector(data => data.panier);
    const discount = useSelector(state => state.discount);

    const lastID = panier.length + 1
    const dispatch = useDispatch()

    const [nom,setnom] = useState("")
    const [quantite,setquantite] = useState(0)
    const [prix,setprix] = useState(0)
    const [disc,setdiscount] = useState('')

    function AddArticle(e) {
        e.preventDefault();
        dispatch(Add({id:lastID,nom:nom,quantite:parseInt(quantite),prix_unitaire:Number(prix)}))
        // console.log(typeof(lastID));
    }
    
    let Total = panier.reduce(function (total, params) {
        return total += params.prix_unitaire
    },0)
    

  return ( 
    <>
    <form onSubmit={AddArticle}>
        id <br/>
        <input type='number' value={lastID}/><br/>
        nom <br/>
        <input onChange={(e)=>{setnom(e.target.value)}} type='text'/><br/>
        quantite <br/>
        <input onChange={(e)=>{setquantite(e.target.value)}} type='number'/><br/>
        prix  <br/>
        <input onChange={(e)=>{setprix(e.target.value)}} type='number'/><br/>
        <button>Add</button>
    </form>
    <table style={{border:"2px solid",width:"1000px"}} className='container table table-striped'>
        <tr>
            <th>nom</th><th>quantite</th><th>prix</th><th colSpan={2}>action</th>
        </tr>
        {
            panier.length > 0?
                panier.map(function (params, i) {
                    return <tr key={i} style={{border:"2px solid"}}>
                        <td>{params.nom}</td>
                        <td>{params.quantite}</td>
                        <td>{params.prix_unitaire}</td>
                        <Link to={`/Update/${params.id}`}>
                            <td><button className='btn btn-success'>Update</button></td>
                        </Link>
                        <td><button onClick={()=>{dispatch(Delete(params.id))}} className='btn btn-danger'>Delete</button></td>
                    </tr>
                })
            :<p></p>
        }
    </table>
    
    <input type='text' onChange={(e)=>{setdiscount(e.target.value)}}/><button onClick={()=>{
        if (discount === disc) {
            Total = Total - (Total*0.2)
            // alert(Total)
            document.getElementById('oldtotal').innerText = Total
        }
    }}>Code Promo</button>
    <h1 id='oldtotal'>Total : {Total}</h1>
    </>
  )
}
