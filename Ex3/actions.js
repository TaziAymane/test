export const Add = (product)=>{
    return {type : "Add", payload : product}
}
export const Delete = (id) =>{
    return {type : "Delete", payload : id}
} 
export const Update = (product) => {
    return {type : "Update", payload : product}
}