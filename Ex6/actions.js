export const Add = (article)=>{
    return {type : "Add", payload : article}
}

export const Delete = (id) => {
    return {type : "Delete", payload : id}
}

export const Update = (article)=>{
    return {type : "Update", payload : article}
}