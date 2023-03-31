// import { useNavigate } from "react-router-dom";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Profile from "../assets/images/Profile.png";
import { useAuth } from "../context/AuthContext";
import classes from "./Navbar.module.css";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container">
        <NavLink className="nav-link" to="/">
          <img className={classes["good-logo"]} src={Profile} alt="Good" />
        </NavLink>
        {/* <a className="navbar-brand" href="/#"></a> */}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          {!isLoggedIn() && (
            <ul className="navbar-nav mb-2 mb-lg-0 float-end">
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button className="btn btn-light">Login</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  <button className="btn btn-light">Signup</button>
                </NavLink>
              </li>
            </ul>
          )}
          {isLoggedIn() && (
            <div className="dropdown" style={{ minWidth: "150px" }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              {/* {user.firstName} */}
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/myProfile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/editProfile">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a role="button" href="/#" onClick={handleLogout}>
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
