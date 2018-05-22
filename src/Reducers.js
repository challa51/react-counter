const reducer=(state=[0],action)=>{
    switch(action.type){
        case 'INC':
            let val=state.slice(action.index);
            
            val=parseInt(val,10)+1;
        return [...state.slice(0,action.index),val,...state.slice(action.index+1)];
        case 'DEC':
        let vald=state.slice(action.index);
        vald=parseInt(vald,10)-1;
        return [...state.slice(0,action.index),vald,...state.slice(action.index+1)];
        case 'ADD_C':
        return [...state,0]
        case 'DEL_C':
        let len =state.length;
        return [...state.splice(0,len-1)];
        default:
        return state;
    }
}

export default  reducer
