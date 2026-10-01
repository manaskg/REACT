import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex justify-between bg-emerald-500 px-8 py-4">
      <h2 className="font-semibold">Navbar</h2>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
}

export default NavBar
