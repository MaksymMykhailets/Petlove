import { useDispatch } from "react-redux";
import { signout } from "../../redux/users/operations";
import { useLocation } from "react-router-dom";
import css from "./UserNav.module.css";

const UserNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ""}`}>
    <button className={css.logoutButton} onClick={handleLogout}>
      LOG OUT
    </button>
    </div>
  );
};

export default UserNav;