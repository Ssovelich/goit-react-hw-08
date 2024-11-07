import styles from "./Modal.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "../../utils/toastStyles";

const Modal = ({ onCloselModal, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success("Contact success deleted!");
      });
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p className={styles.text}>
          Do you confirm the deletion of the contact?
        </p>
        <div className={styles.wrapBtn}>
          <button onClick={onCloselModal} className={styles.btn} type="button">
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
        <Toaster toastOptions={toastOptions} />
      </div>
    </div>
  );
};

export default Modal;
