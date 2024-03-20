import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const setLink = ({ isActive }) => (isActive ? "nav-active-link" : "nav-link");

  return (
    <>
      <div className="header-component">
        <nav>
          <NavLink className={setLink} to="/dictionary">
            Dictionary
          </NavLink>
          <NavLink className={setLink} to="/translator">
            Translate
          </NavLink>
          <NavLink className={setLink} to="/login">
            Login
          </NavLink>
          <NavLink className={setLink} to="register">
            Registry
          </NavLink>
        </nav>
      </div>
    </>
  );
}
