import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">Navbar</Link>

      <div className="ml-auto">
        <Link to="/contacts/add" className="btn btn-light">Create Contact</Link>
      </div>
    </nav>
    
 );
}

export default Navbar
