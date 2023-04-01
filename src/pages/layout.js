import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  const navLinkStyle = ({ isActive }) => {
    const activeLinkStyle = {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? '#7c1f1f' : '#0e0ae6',
    };
    return activeLinkStyle;
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1>Math Magicians</h1>
        <nav className="nav-bar">
          <NavLink to="/" style={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/calculator" style={navLinkStyle}>
            Calculator
          </NavLink>
          <NavLink to="/quotes" style={navLinkStyle}>
            Quotes
          </NavLink>
        </nav>
      </header>

      <Outlet className="content-wrapper" />
    </div>
  );
};

export default Layout;
