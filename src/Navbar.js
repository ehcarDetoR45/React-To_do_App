import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="d-flex">
      <NavLink className="navbar-brand fw-bold fs-4" to="/">
        LOGO
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse text-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav fw-bolder mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ee3d89" : "",
              })}
              className="nav-link"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ee3d89" : "",
              })}
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ee3d89" : "",
              })}
              className="nav-link"
              to="/employees"
            >
              Employees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ee3d89" : "",
              })}
              className="nav-link"
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ee3d89" : "",
              })}
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
