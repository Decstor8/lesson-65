import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar: React.FC = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink to="/" className='text-decoration-none text-black fw-bold text-uppercase'>Cars</NavLink>
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/popular" className="nav-link">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/story" className="nav-link">
                Story
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/tesla" className="nav-link">
                Tesla
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/300SLR" className="nav-link">
                300SLR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/leader" className="nav-link">
                Leader
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/admin" className="nav-link">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default AppBar;
