export default (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[action.payload.product , ...state.cart],
                
            }
        case 'INCREASE':

            state.cart[state.cart.findIndex(e => e.id === action.payload)].quantity++
                
            return{ 
                ...state,
                   cart: [...state.cart]
            }
        case 'DECREASE':

            state.cart[state.cart.findIndex(e => e.id === action.payload)].quantity--
                
            return{ 
                ...state,
                   cart: [...state.cart]
            }
            
            default:return state
    }
    
}