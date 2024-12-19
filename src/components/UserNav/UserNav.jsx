import { useDispatch } from "react-redux";
import { signout } from "../../redux/users/operations";
import css from "./UserNav.module.css";

const UserNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signout());
  };

  return (
    <>
    <button className={css.logoutButton} onClick={handleLogout}>
      LOG OUT
    </button>
    </>
  );
};

export default UserNav;