import styles from "./Contact.module.css";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import Modal from "../Modal/Modal";
import ContactEditModal from "../ContactEditModal/ContactEditModal";

import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../redux/contacts/slice";
// import { setCurentContact } from "../../redux/contacts/slice";
// import { deleteContact } from "../../redux/contacts/operations";
// import { useState } from "react";
import { selectOpenModal } from "../../redux/contacts/selectors";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  // const isOpenModal = useSelector((state) => state.contactsData.isOpenModal);
  const isOpenModal = useSelector(selectOpenModal);

  const handleDelete = () => {
    dispatch(openModal(contact.id));
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
      dispatch(onCloseEditModal());
    }
  };

  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const onOpenModal = () => {
  //   setIsOpenModal(true);
  //   document.body.style.overflow = "hidden";
  // };
  // const onCloseModal = () => {
  //   setIsOpenModal(false);
  //   document.body.style.overflow = "auto";
  // };

  // const onBackdropClick = (event) => {
  //   if (event.target === event.currentTarget) {
  //     onCloseModal();
  //     onCloseEditModal();
  //   }
  // };

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const onOpenEditModal = () => {
    setIsOpenEditModal(true);
    document.body.style.overflow = "hidden";
  };
  const onCloseEditModal = () => {
    setIsOpenEditModal(false);
    document.body.style.overflow = "auto";
  };

  // const onDeleteContact = (id) => {
  //   const action = deleteContact(id);

  //   dispatch(action)
  //     .unwrap()
  //     .then(() => {
  //       toast.success("Contact success deleted!");
  //     });
  // };

  // const onEditContact = (id) => {
  //   const action = setCurentContact({ id, name, number });

  //   dispatch(action);
  // };

  return (
    <>
      <li className={styles.contactListItem}>
        <div>
          <h3 className={styles.name}>
            <FaUser className={styles.icon} />
            &nbsp;
            {contact.name}
          </h3>
          <p className={styles.number}>
            <FaPhone className={styles.icon} />
            &nbsp;
            {contact.number}
          </p>
        </div>
        {/* <button className={styles.btnDel} onClick={onOpenModal}>
          <MdDelete size={25} />
        </button> */}
        <button
          className={styles.btnDel}
          onClick={handleDelete}
          // id={contact.id}
        >
          <MdDelete size={25} />
        </button>
        <button className={styles.btnEdit} onClick={onOpenEditModal}>
          <CiEdit size={25} />
        </button>
        {/* <button
          className={styles.btnEdit}
          onClick={() => {
            onEditContact(id, contact);
          }}
        >
          <CiEdit size={25} />
        </button> */}
        {/* <Modal
          isOpen={isOpenModal}
          onRequestClose={handleCloseModal}
          onConfirm={confirmDelete}
        /> */}
        {isOpenModal && (
          <Modal
            onCloseModal={onCloseModal}
            contactId={contact.id}
            onBackdropClick={onBackdropClick}
          />
        )}
        {isOpenEditModal && (
          <ContactEditModal
            onCloseEditModal={onCloseEditModal}
            contactId={contact.id}
            name={contact.name}
            number={contact.number}
            // onBackdropClick={onBackdropClick}
          />
        )}
      </li>
    </>
  );
};

export default Contact;
