import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <>
      <li className={styles.contactListItem}>
        <div>
          <p className={styles.info}>
            <FaUser className={styles.icon} />
            &nbsp;
            {name}
          </p>
          <p className={styles.info}>
            <FaPhone className={styles.icon} />
            &nbsp;
            {number}
          </p>
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
