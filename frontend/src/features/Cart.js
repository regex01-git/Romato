import {createSlice} from '@reduxjs/toolkit'
let initialState={
    cartItems:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
        ,
    totalCartQuantity:0,
    totalAmount:0

}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            // const ind=state.cartItems.findIndex((item)=>item.id==action.payload.id)
            // state.cartItems[ind].cartQuantity=1;
            console.log("payload",action.payload)
            state.cartItems=[...state.cartItems,{...action.payload,cartQuantity:1,indiTotal:action.payload.reviewCount}]

            localStorage.setItem('cart',JSON.stringify(state.cartItems))
            console.log("added",state.cartItems)
        },
        increase(state,action){
            const ind=state.cartItems.findIndex((item)=>item.id==action.payload.id)
            state.cartItems[ind].cartQuantity+=1;
            state.cartItems[ind].indiTotal+=action.payload.reviewCount;
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        decrease(state,action){
            const ind=state.cartItems.findIndex((item)=>item.id==action.payload.id)
            state.cartItems[ind].cartQuantity-=1;
            state.cartItems[ind].indiTotal-=action.payload.reviewCount;
            if(state.cartItems[ind].cartQuantity<=0){
                const newarr=state.cartItems.filter(item=>item.id!=action.payload.id);
                state.cartItems=newarr
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
            
        },
         increaseMenu(state,action){
            const ind=state.cartItems.findIndex((item)=>item._id==action.payload._id)
            state.cartItems[ind].cartQuantity+=1;
            state.cartItems[ind].indiTotal+=action.payload.reviewCount;
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        decreaseMenu(state,action){
            const ind=state.cartItems.findIndex((item)=>item._id==action.payload._id)
            state.cartItems[ind].cartQuantity-=1;
            state.cartItems[ind].indiTotal-=action.payload.reviewCount;
            if(state.cartItems[ind].cartQuantity<=0){
                const newarr=state.cartItems.filter(item=>item.id!=action.payload.id);
                state.cartItems=newarr
            }
            localStorage.setItem('cart',JSON.stringify(state.cartItems))
            
        },
        total(state,action){
            let quantity=0;
            let sum=state.cartItems.reduce((prev,item)=>{
                    quantity+=item.cartQuantity;
                    return prev+item.indiTotal;
            },0)
            state.totalCartQuantity=quantity;
            state.totalAmount=sum;
            console.log("cart things",state.totalCartQuantity,state.totalAmount)
        }
    },
})
export const {add,increase,decrease,total,increaseMenu,decreaseMenu}=cartSlice.actions;
export default cartSlice.reducer;