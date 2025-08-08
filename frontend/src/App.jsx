import React from 'react'
import NavBar from './components/Navbar/Nav'
import HomeMiddle from './components/HomeMiddle'
import { Route, Routes } from 'react-router'
import Cart from './components/Cart'
import Menu from './components/Menu'
import Pagenotfound from './components/Pagenotfound'
import Admin from './components/Admin/Admin'
// import Homeindex from './components/Admin/Homeindex'
import ProductList from './components/Admin/ProductList'
import AdminHome from './components/Admin/AdminHome'
import { ToastContainer } from 'react-toastify';
import Signin from './components/userForm/Signin'
import Signup from './components/userForm/Signup'
import 'react-toastify/dist/ReactToastify.css'


export default function App() {
  return (
    <>
    <NavBar/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<HomeMiddle/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/mobile' element={<h1>MOBILE APP IN DEVELOPMENT</h1>}/>
      <Route path='/contact' element={<h1>Contact page</h1>}/>
      <Route path='/admin' element={<AdminHome/>}>
      {/* <Route index element={<AdminHome/>}/> */}
      <Route path='add-product' element={<Admin/>}/>
      <Route path='product-list' element={<ProductList/>}/>
      </Route>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/*" element={<Pagenotfound/>}/>
    </Routes>
    </>
  )
}
