import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";

import { apiDeleteContact } from "../../redux/contacts/operations";

const Modal = ({ onCloseModal, contactId, onBackdropClick, name }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    const action = apiDeleteContact(contactId);

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
        <p className={styles.text}>Do you want to delete the contact:</p>
        <p className={styles.name}>{name}?</p>
        <div className={styles.wrapBtn}>
          <button onClick={onCloseModal} className={styles.btn} type="button">
            No
          </button>
          <button
            onClick={() => {
              onDeleteContact(contactId);
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
