import { useDispatch } from "react-redux";
import { signout } from "../../redux/users/operations";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";
import css from "./UserNav.module.css";

const UserNav = ({ onClose }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(signout());
    if (onClose) {
      onClose();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${css.authNav} ${isHomePage ? css.authNavHome : ""}`}>
      <button className={css.logoutButton} onClick={openModal}>
        LOG OUT
      </button>

      {isModalOpen && (
        <ModalApproveAction
          onConfirm={handleLogout}
          onCancel={closeModal}
          message="Already leaving?"
        />
      )}
    </div>
  );
};

export default UserNav;