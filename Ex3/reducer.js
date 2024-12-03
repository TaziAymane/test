const initialstate = {
    Products : [
        {id:1, nom:'ennah', prix:150, quantite:20}
    ]
}

const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case "Add" :
            return {...state, Products:[...state.Products, action.payload]}
        case "Delete" :
            return {...state, Products : [...state.Products.filter(function (params) {
                return params.id !== action.payload
            })]}
        case "Update" :
            const Prod = state.Products.find(function (params) {
                return parseInt(params.id) === parseInt(action.payload.id)
            })
            if (Prod){ 
                Prod.nom = action.payload.nom
                Prod.prix = parseInt(action.payload.prix)
                Prod.quantite = parseInt(action.payload.quantite)
            }
            return state
        default :
            return state
    }
}

export default reducer