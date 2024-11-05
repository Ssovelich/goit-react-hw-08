import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
// import { openModal } from "../../redux/contacts/slice";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteContact } from "../../redux/contacts/operations";
import { setCurentContact } from "../../redux/contacts/slice";

const Contact = ({ name, number, id, contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const onEditContact = (id) => {
    const action = setCurentContact({ id, name, number });
    dispatch(action);
  };

  // const handleDelete = () => {
  //   dispatch(openModal(id));
  // };

  return (
    <>
      <li className={styles.contactListItem}>
        <div>
          <p className={styles.name}>
            <FaUser className={styles.icon} />
            &nbsp;
            {name}
          </p>
          <p className={styles.number}>
            <FaPhone className={styles.icon} />
            &nbsp;
            {number}
          </p>
        </div>
        <button
          className={styles.btnDel}
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          <MdDelete size={25} />
        </button>
        <button
          className={styles.btnEdit}
          onClick={() => {
            onEditContact(id, contact);
          }}
        >
          <CiEdit size={25} />
        </button>
      </li>
    </>
  );
};

export default Contact;
