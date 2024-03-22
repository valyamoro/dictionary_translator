import "../styles/footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const setLink = ({ isActive }) => (isActive ? "nav-active-link" : "nav-link");
  return (
    <>
      <div className="footer">
        <div className="developers">
          <NavLink className={setLink} to="https://github.com/Tr3nuss">
            Frontend developer
          </NavLink>
          <NavLink className={setLink} to="https://github.com/valyamoro">
            Backend developer
          </NavLink>
        </div>
      </div>
    </>
  );
}
