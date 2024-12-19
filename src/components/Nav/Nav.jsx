import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/users/selectors";
import { IoMenu, IoClose } from "react-icons/io5";
import css from "./Nav.module.css";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import UserBar from "../UserBar/UserBar";

const Nav = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isHomePage = location.pathname === "/home";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${css.nav} ${isHomePage ? css.homeNav : ""}`}>
      <div className={css.container}>
        <div className={css.icons}>
        {isAuthenticated && location.pathname !== "/register" && location.pathname !== "/login" ? (
          <UserBar />
        ) : null}
          <IoMenu
            className={css.menuIcon}
            size={32}
            onClick={toggleMenu}
            />
        </div>
        </div>

      {menuOpen && (
        <div className={css.burgerMenu}>
          <IoClose className={css.closeIcon} size={32} onClick={toggleMenu} />
          <ul className={css.menuList}>
            <li>
              <Link
                to="/news"
                className={`${css.menuItem} ${isActive("/news") ? css.active : ""}`}
                onClick={toggleMenu}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/notices"
                className={`${css.menuItem} ${isActive("/notices") ? css.active : ""}`}
                onClick={toggleMenu}
              >
                Find pet
              </Link>
            </li>
            <li>
              <Link
                to="/friends"
                className={`${css.menuItem} ${isActive("/friends") ? css.active : ""}`}
                onClick={toggleMenu}
              >
                Our friends
              </Link>
            </li>
          </ul>
          <div className={css.authButtons} onClick={toggleMenu}>
          {isAuthenticated ? <UserNav /> : <AuthNav/>}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;