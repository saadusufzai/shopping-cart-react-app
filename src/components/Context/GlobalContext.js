import React, {createContext, useReducer} from 'react'
import GlobalReducer from './GlobalReducer'

const initialState = {
    id:0,
    quantity:0,
    price:0,
    product:[],
}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) =>{

    let [state, dispatch] = useReducer(GlobalReducer, initialState)


    function addItem(id){
        dispatch({
            type:'ADD_TO_CART',
            payload:id
        })
    }

   

    return(
        <GlobalContext.Provider value={{
            ...state,
            addItem,
            

        }}>
            {children}
        </GlobalContext.Provider>
    )

}