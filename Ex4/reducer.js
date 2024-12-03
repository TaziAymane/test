const initialstate = {
    Note : [
        {id:1, title:'Mogodb', content:'install MongoDB Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi non consequuntur minus nulla vero iste iusto id expedita nisi, nam aperiam doloribus ad dolorum libero porro. Corrupti adipisci nulla iste!'}   
    ],
    Important : []
}

const reducer = (state=initialstate,action)=>{
    switch (action.type) {
        case "add":
            return {...state, Note : [...state.Note, action.payload]}
        case "important" :
            return {...state, Important : [...state.Important, action.payload] }
        case "delete":
            return {...state, Note : [...state.Note.filter(function (params) {
                return params.id !== action.payload
            })]}
        case "deleteImportant":
            return {...state, Important : [...state.Important.filter(function (params) {
                return params.id !== parseInt(action.payload)
            })]}
        case "update":
            const notee = state.Note.find(function (params) {
                return params.id === parseInt(action.payload.id)
            })
            if (notee) {
                notee.title = action.payload.title
                notee.content = action.payload.content
            }
            return state
        default:
            return state
    }
}

export default reducer