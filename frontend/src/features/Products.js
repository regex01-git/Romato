import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import {toast} from 'react-toastify'
import axios from 'axios'
let initialState={
    foodItems:[],
    menuItems:[],
    status:"",
    statusMenu:""
}
export const fetchApi=createAsyncThunk(
    "products/fetchApi",
    async(values,{rejectWithValue})=>{
        try{
            const data=await axios('https://dummyjson.com/recipes');
            if(data){
                return data.data;
            }
        }
        catch(err){
            console.log("something went wrong in dummy api calling",err);
            return rejectWithValue(err)
        }
    }

)
export const fetchMenu=createAsyncThunk(
    "productSlice/fetchMenu",
    async(values,{rejectWithValue})=>{
      try{
          let resp=await axios.get('http://localhost:5000/api/product');
        // resp=await resp.json();
        // console.log("menu response",resp)
        
        return resp.data;
      }catch(err){
        console.log("menu fetch error",err);
        return rejectWithValue(err);
      }
    }
)
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.status="pending"
        }),
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.status="fullfiled"
            if(action.payload){
                console.log("items",action.payload)
                state.foodItems=action.payload
            }
        },
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.status="rejected"
        })

        ),
         builder.addCase(fetchMenu.pending,(state,action)=>{
            state.statusMenu="pending"
        }),
        builder.addCase(fetchMenu.fulfilled,(state,action)=>{
            state.statusMenu="fullfiled"
            if(action.payload){
                // console.log("menuitems",action.payload)
                state.menuItems=action.payload
                
            }
        },
        builder.addCase(fetchMenu.rejected,(state,action)=>{
            state.statusMenu="rejected"
        })

        )
    }
})
export default productSlice.reducer;
export const {}=productSlice.actions;