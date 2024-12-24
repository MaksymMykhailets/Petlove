import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";


const AuthNav = ({onClose}) => {

  return (
    <div className={css.authNav}>
      <Link to="/login" className={css.loginButton} onClick={onClose}>
        LOG IN
      </Link>
      <Link to="/register" className={css.registerButton} onClick={onClose}>
        REGISTRATION
      </Link>
    </div>
  );
};

export default AuthNav;