import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Add } from "./actions"
import { Delete } from "./actions"
import { Link } from "react-router-dom"

export default function Ajouter() {
    const lastid = useSelector(data => data.Products.length+1)
    const product = useSelector(data => data.Products)
    const [Newproduct, setNewproduct] = useState({nom:'',prix:0,quantite:0})
    const totalll = product.reduce(function (total, params) {
        return total += parseInt(params.prix)
    },0)
    const dispatch = useDispatch()

    function AddProduct(e) {
        e.preventDefault()
        dispatch(Add({id:parseInt(lastid),nom:Newproduct.nom,prix:parseInt(Newproduct.prix),quantite:parseInt(Newproduct.quantite)}))    
    }


  return (
    <>
    <form onSubmit={AddProduct}>
        id <br/>
        <input placeholder="id" value={lastid}/><br/>
        nom <br/>
        <input placeholder="nom" onChange={(e)=>setNewproduct({...Newproduct,nom:e.target.value})}/><br/>
        prix <br/>
        <input placeholder="prix" onChange={(e)=>setNewproduct({...Newproduct,prix:e.target.value})} /><br/>
        quantite <br/>
        <input placeholder="quantite" onChange={(e)=>setNewproduct({...Newproduct,quantite:e.target.value})} /><br/>
        <button>Ajouter</button>
    </form>
    <div>
    <table border={1}>
        <tr>
            <th>id</th>
            <th>nom</th>
            <th>prix</th>
            <th>quantite</th>
            <th>action</th>
        </tr>
        {
            product.map(function (params, i) {
                return <tr key={i}>
                    <td>{params.id}</td>
                    <td>{params.nom}</td>
                    <td>{params.prix}</td>
                    <td>{params.quantite}</td>
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
    <h2>valeur totale de l'inventaire : {totalll}</h2>
    </div>
    </>
  )
}
