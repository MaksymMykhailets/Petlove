import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";


const AuthNav = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/home";

  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ""}`}>
      <Link to="/login" className={css.loginButton}>
        LOG IN
      </Link>
      <Link to="/register" className={css.registerButton}>
        REGISTRATION
      </Link>
    </div>
  );
};

export default AuthNav;