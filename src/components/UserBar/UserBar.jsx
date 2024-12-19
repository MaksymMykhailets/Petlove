import { FaUserLarge } from "react-icons/fa6";
import css from "./UserBar.module.css";

const UserBar = () => {
  return (
    <>
    <div className={css.circle}>
        <FaUserLarge className={css.userIcon} size={20} />
    </div>
    </>
  );
}

export default UserBar;