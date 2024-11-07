import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setCurentContact } from "../../redux/contacts/slice";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
// import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { useState } from "react";
// import { selectOpenModal } from "../../redux/contacts/selectors";
// import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "../../utils/toastStyles";

const Contact = ({ name, number, id, contact }) => {
  const dispatch = useDispatch();

  // const isOpenModal = useSelector((state) => state.contacts.isOpenModal);
  // const isOpenModal = useSelector(selectOpenModal);

  // const handleDelete = () => {
  //   dispatch(openModal(contact.id));
  // };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };
  const onCloselModal = () => {
    setIsOpenModal(false);
  };

  // const onDeleteContact = (id) => {
  //   const action = deleteContact(id);

  //   dispatch(action)
  //     .unwrap()
  //     .then(() => {
  //       toast.success("Contact success deleted!");
  //     });
  // };

  const onEditContact = (id) => {
    const action = setCurentContact({ id, name, number });

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success("Contact is edited successfully!");
      });
  };

  // const handleDelete = () => {
  //   dispatch(openModal(contact.id));
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
        <button className={styles.btnDel} onClick={onOpenModal}>
          <MdDelete size={25} />
        </button>
        {/* <button
          className={styles.btnDel}
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          <MdDelete size={25} />
        </button> */}
        <button
          className={styles.btnEdit}
          onClick={() => {
            onEditContact(id, contact);
          }}
        >
          <CiEdit size={25} />
        </button>
        <Toaster toastOptions={toastOptions} />
        {isOpenModal && <Modal onCloselModal={onCloselModal} id={id} />}
      </li>
    </>
  );
};

export default Contact;
