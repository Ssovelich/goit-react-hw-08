import styles from "./Modal.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Modal = ({ onCloseModal, id, onBackdropClick }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success("Contact is deleted successfully!");
        onCloseModal();
      });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onCloseModal]);

  return (
    <div onClick={onBackdropClick} className={styles.backdrop}>
      <div className={styles.modal}>
        <p className={styles.text}>Do you want to delete the contact?</p>
        <div className={styles.wrapBtn}>
          <button onClick={onCloseModal} className={styles.btn} type="button">
            No
          </button>
          <button
            onClick={() => {
              onDeleteContact(id);
            }}
            type="button"
            className={styles.btn}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
