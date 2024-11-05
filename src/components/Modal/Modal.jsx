import styles from "./Modal.module.css";

const Modal = ({ onConfirm, onCloseModal }) => {
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div onClick={onBackdropClick} className={styles.backdrop}>
      <div className={styles.modal}>
        <p className={styles.text}>
          Do you confirm the deletion of the contact?
        </p>
        <button
          onClick={onCloseModal}
          className={styles.closeBtn}
          type="button"
        >
          Cloce
        </button>
        <button onClick={onConfirm} type="button" className={styles.delBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
