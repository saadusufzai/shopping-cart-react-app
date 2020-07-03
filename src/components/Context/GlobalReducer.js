export default (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[action.payload.product , ...state.cart]
            }
        case 'TOTAL_PRICE':
            return{
                ...state,
                totalPrice:state.cart.reduce((acc,value)=> acc+value.price,0)
            }
            
            default:return state
    }
    
}