export default (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[action.payload.product , ...state.cart]
            }
            default:return state
    }
    
}