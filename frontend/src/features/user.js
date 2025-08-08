
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'
let initialState = {
    id: null,
    name: '',
    isAdmin: false,
    token: '',
    Loginstatus: '',
    loginerror: ''
}
export const signin = createAsyncThunk(
    "userSlice/signin",
    async (values, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://romato-1.onrender.com/api/login', {
                method: 'POST',
                data: values
            })
            // console.log("response", response.data.data.data)
            return response.data;

        } catch (err) {
            // console.log("error in front", err)
            return rejectWithValue(err)
        }
    }
)
export const signup = createAsyncThunk(
    "userSlice/signup",
    async (values, { rejectWithValue }) => {
        console.log("values", values)
        try {
            const response = await axios('https://romato-1.onrender.com/api/user', {
                method: "POST",
                data:values
            })
            console.log("response", response)
            if (response.data.status == 'success') {
                console.log("login success in frontend", response.data)
                return response.data
            }
        } catch (err) {
            console.log("front end error", err.response.data.data);
            return rejectWithValue(err)
        }
    }
)
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state,action){
            state.token=''
            state.isAdmin=false;
            localStorage.removeItem('usertoken')
            toast.success("User is Loged out", {
                        position: "bottom-left"
                    })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state, action) => {
            state.Loginstatus = "pending"
        }),
            builder.addCase(signup.fulfilled, (state, action) => {
                if (action.payload.status == 'success') {

                    state.Loginstatus = "fullfiled"
                    const decoded = jwtDecode(action.payload.data)
                    // console.log("token front",action.payload) 
                    // console.log("decoded payload:", decoded);
                    localStorage.setItem('usertoken', JSON.stringify(decoded))
                    state.token = JSON.parse(localStorage.getItem('usertoken'))

                    toast.success("User is created", {
                        position: "bottom-left"
                    })
                }}),
            builder.addCase(signup.rejected, (state, action) => {
                state.Loginstatus = "rejected"
                state.loginerror = action.payload
                console.log("error in rejected", action.payload)
                toast.error(action.payload.response.data.data, {
                    position: "bottom-left"
                })
            }),
             builder.addCase(signin.pending, (state, action) => {
            state.Loginstatus = "pending"
        }),
            builder.addCase(signin.fulfilled, (state, action) => {
                if (action.payload.status == 'success') {

                    state.Loginstatus = "fullfiled"
                    const decoded = jwtDecode(action.payload.token)
                    // console.log("token front",action.payload.token) 
                    // console.log("decoded payload:", decoded);
                    state.isAdmin=decoded.isAdmin
                    localStorage.setItem('usertoken', JSON.stringify(decoded))
                    state.token = JSON.parse(localStorage.getItem('usertoken'))

                    toast.success("User is Loged in", {
                        position: "bottom-left"
                    })
                }}),
            builder.addCase(signin.rejected, (state, action) => {
                console.log("payload",action.payload)
                state.Loginstatus = "rejected"
                state.loginerror = action.payload
               
                toast.error(action.payload.response.data, {
                    position: "bottom-left"
                })
            })
    }
})
export default userSlice.reducer
export const {logout}=userSlice.actions