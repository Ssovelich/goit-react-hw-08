import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
// import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id);

    dispatch(action);
  };

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
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
