export const Add = (note)=>{
    return {
        type : "add",
        payload : note
    }
}

export const Delete = (id) =>{
    return {
        type : "delete",
        payload : id
    }
}

export const Update = (note)=>{
    return {
        type : "update",
        payload : note
    }
}

export const ImportantNote = (note) => {
    return {
        type : "important",
        payload : note
    }
}

export const DeleteImportant = (id) => {
    return {
        type : "deleteImportant",
        payload : id
    }
}