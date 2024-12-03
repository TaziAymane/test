const initialstate = {
    panier : [
        {
            id: 1,
            nom: 'T-shirt',
            quantite: 2,
            prix_unitaire: 15.99
        }
    ],
    discount : "hello world"
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){
        case "Add":
            return {...state, panier : [...state.panier, action.payload]}
        case "Delete":
            return {...state, panier : [...state.panier.filter(function (params) {
                return params.id !== parseInt(action.payload)
            })]}
        case "Update":
            const pn = state.panier.find(function (params) {
                return params.id === parseInt(action.payload.id)
            })
            pn.nom = action.payload.nom
            pn.quantite = parseInt(action.payload.quantite)
            pn.prix_unitaire = Number(action.payload.prix_unitaire)
            return state
        default : 
            return state
    }
}

export default reducer