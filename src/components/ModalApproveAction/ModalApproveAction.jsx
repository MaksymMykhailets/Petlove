import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./ModalApproveAction.module.css";

const ModalApproveAction = ({ onConfirm, onCancel, message }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    if (onCancel) {
      onCancel();
    }
    navigate("/home");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onCancel();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains(css.modalBackdrop)) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onCancel}>
          <IoClose size={24} />
        </button>
        <div className={css.iconContainer}>
          <span role="img" aria-label="cat">🐈</span>
        </div>
        <p className={css.message}>{message}</p>
        <div className={css.modalActions}>
          <button className={css.confirmButton} onClick={handleConfirm}>
            Yes
          </button>
          <button className={css.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;