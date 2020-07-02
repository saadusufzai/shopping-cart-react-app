import React, {createContext, useReducer} from 'react'
import GlobalReducer from './GlobalReducer'
import { products } from '../Products/dummydata'

const initialState = {
    products,
    cart:[]

} 
    


export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) =>{

    let [state, dispatch] = useReducer(GlobalReducer, initialState)


    function addItem(product){
        dispatch({
            type:'ADD_TO_CART',
            payload:product
        })
    }

   

    return(
        <GlobalContext.Provider value={{
            products:state.products,
            cart:state.cart,
            addItem,
            

        }}>
            {children}
        </GlobalContext.Provider>
    )

}