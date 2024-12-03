export const AddTask = (Task) =>{
    return {type : "AddTask", payload : Task}
}
export const DeleteTask = (id) =>{
    return {type : "DeleteTask", payload : id}
} 
export const UpdateTask = (Task) => {
    return {type : "UpdateTask", payload : Task}
}