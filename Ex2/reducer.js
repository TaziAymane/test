const initialstate = {
    Contacts : [
        {id:1, nom:'ennah', telephone:'+212610203040', email:'123ennah@gmail.com'}
    ]
}

const reducer = (state=initialstate,action)=>{
    switch(action.type){
        case "Add" :
            return {...state, Contacts:[...state.Contacts, action.payload]}
        case "Delete" :
            return {...state, Contacts : [...state.Contacts.filter(function (params) {
                return params.id !== action.payload
            })]}
        case "Update" :
            const Contact = state.Contacts.find(function (params) {
                return parseInt(params.id) === parseInt(action.payload.id)
            })
            if (Contact){ 
                Contact.nom = action.payload.nom
                Contact.telephone = action.payload.telephone
                Contact.email = action.payload.email
            }
            return state
        default :
            return state
    }
}

export default reducer