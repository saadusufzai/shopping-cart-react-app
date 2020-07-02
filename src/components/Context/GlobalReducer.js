export default (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                quantity: state.quantity +1,
                id:state.id
            }
            default:return state
    }
    
}