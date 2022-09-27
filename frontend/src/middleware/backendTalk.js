export const backEndTalk=(fun,errFun)=>{
    return async(note,_id)=>{
        try{
            await fun(note,_id)
        }
        catch(error){
            errFun(error)
        }
    }
}

