export const Add = (contact)=>{
    return {type : "Add", payload : contact}
}
export const Delete = (id) =>{
    return {type : "Delete", payload : id}
} 
export const Update = (contact) => {
    return {type : "Update", payload : contact}
}