
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/Products.js'
import {Provider} from 'react-redux'
import { fetchApi,fetchMenu } from './features/Products.js';
import { BrowserRouter } from 'react-router';
import cartReducer from './features/Cart.js'
import userReducer from './features/user.js'
const store=configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        user:userReducer
    }
})
store.dispatch(fetchApi())
store.dispatch(fetchMenu())

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
   
    <Provider store={store}>
    <App />
    </Provider>
     </BrowserRouter>
)
