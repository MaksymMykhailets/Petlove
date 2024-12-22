import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";


const AuthNav = () => {

  return (
    <div className={css.authNav}>
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