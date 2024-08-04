import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: [],
    },
    reducers: {
        addToCart : (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
            // why state.items = [] is not working
        }
    }
})

console.log("Cart Slice : ", cartSlice); 


export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;