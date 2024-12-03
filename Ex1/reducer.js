const initialstate = {
    Tasks : [
        {
            id: 1,
            title: 'Data Base',
            description: 'Create table person',
            completed: 'false',
            date: '2024-11-15'
        }
    ]
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        case "AddTask" :
            return {...state, Tasks : [...state.Tasks, action.payload]}
        case "DeleteTask" :
            return {...state, Tasks : [...state.Tasks.filter(function (params) {
                return params.id !== action.payload
            })]}
        case "UpdateTask" :
            const Task = state.Tasks.find(function (params) {
                return parseInt(params.id) === parseInt(action.payload.id)
            })
            if (Task){ 
                Task.title = action.payload.title
                Task.description = action.payload.description
                Task.completed = action.payload.completed
                Task.date = action.payload.date
            }
            return state
        default :
            return state
    }
}

export default reducer
  