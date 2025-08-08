import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const user=useSelector(store=>store.user)
  const navigate=useNavigate()
  if(!user.token){
    navigate('/signin')
  }
  return (
    <div className="admin-container"  >
      <aside className="admin-sidebar"  >
        <h2>Admin Dashboard</h2>
        <nav>
          <NavLink to="" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="add-product" className={({ isActive }) => isActive ? 'active' : ''}>
            Add Product
          </NavLink>
          <NavLink to="product-list" className={({ isActive }) => isActive ? 'active' : ''}>
            Product List
          </NavLink>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
