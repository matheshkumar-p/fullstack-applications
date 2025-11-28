import * as actionTypes from "../constants/cartConstants"
// import {useDispatch} from "react-redux"
export const AddToCart = (productid) => (dispatch,getState) =>{
   
    
   dispatch({
        type:actionTypes.ADD_TO_CART,
        payload:productid,
    })

    localStorage.setItem("cart",getState().CartReducer)
}