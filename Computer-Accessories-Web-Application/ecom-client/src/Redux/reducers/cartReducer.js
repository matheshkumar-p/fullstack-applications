import * as actionTypes from "../constants/cartConstants"

let initialCart = []

const CartReducer = (state = initialCart,action) => {
    // console.log(action)
    console.log(state)
    switch(action.type){
        case actionTypes.ADD_TO_CART:{
            
            const items = action.payload;
            console.log(items)
            
            if(state.includes(items)){
                return state;
            }
            else{
                return state=[...state,items]
            }
        }
        default:{
            return state;
        }
    }

}

export default CartReducer;