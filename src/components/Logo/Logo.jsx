import { Link, useLocation } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => { 
    const location = useLocation();
    const isHomePage = location.pathname === "/home";

    return (
        <div className={`${css.nav} ${isHomePage ? css.navHome: ""}`}>
        <Link to="/home" className={css.logo}>
          <span>petl</span>
          <span className={css.heart}>{isHomePage ? "🤍" : "💛"}</span>
          <span>ve</span>
        </Link>
        </div>
    );
}

export default Logo;