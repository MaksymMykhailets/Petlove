import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <nav className={`${css.nav} ${isHomePage ? css.homeNav : ""}`}>
      <div className={css.container}>
        <Link to="/" className={css.logo}>
          <span>petl</span>
          <span className={css.heart}>
          {isHomePage ? "🤍" : "💛"}
          </span>
          <span>ve</span>
        </Link>
        <div className={css.icons}>
          {isHomePage && 
          <div className={css.circle}>
            <FaUserLarge className={css.userIcon} size={20}/>
          </div>}
          <IoMenu className={css.menuIcon} size={32} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
