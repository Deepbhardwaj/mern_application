import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <h1>File Upload And Download</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          HOME
        </NavLink>
        <NavLink activeClassName="active" to="/list">
          FILES LIST
        </NavLink>
        <NavLink activeClassName="active" to="/news">
          NEWS
        </NavLink>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <NavLink activeClassName="active" to="/login">
              LOGIN
            </NavLink>
            <NavLink activeClassName="active" to="/signup">
              SIGNUP
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
