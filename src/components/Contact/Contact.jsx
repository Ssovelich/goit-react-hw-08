import styles from "./Contact.module.css";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import Modal from "../Modal/Modal";
import ContactEditModal from "../ContactEditModal/ContactEditModal";

const Contact = ({ contact }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function getPageScrollbarWidth() {
    const viewportWidth = window.innerWidth;
    console.log("viewportWidth:", viewportWidth);
    const documentWidth = document.documentElement.clientWidth;
    console.log("documentWidth:", documentWidth);
    return viewportWidth - documentWidth;
  }

  const scrollbarWidthPlus20 = getPageScrollbarWidth() + 20;
  console.log(scrollbarWidthPlus20);

  const onOpenModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidthPlus20}px`;
  };
  const onCloseModal = () => {
    setIsOpenModal(false);
    document.body.style.overflow = "auto";
    // document.body.style.paddingRight = "20px";
  };

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const onOpenEditModal = () => {
    setIsOpenEditModal(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "37px";
  };
  const onCloseEditModal = () => {
    setIsOpenEditModal(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "20px";
  };

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
      onCloseEditModal();
    }
  };

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
        <button className={styles.btnDel} onClick={onOpenModal}>
          <MdDelete size={25} />
        </button>
        <button className={styles.btnEdit} onClick={onOpenEditModal}>
          <CiEdit size={25} />
        </button>
        {isOpenModal && (
          <Modal
            onCloseModal={onCloseModal}
            contactId={contact.id}
            name={contact.name}
            onBackdropClick={onBackdropClick}
          />
        )}
        {isOpenEditModal && (
          <ContactEditModal
            onCloseEditModal={onCloseEditModal}
            contactId={contact.id}
            name={contact.name}
            number={contact.number}
            onBackdropClick={onBackdropClick}
          />
        )}
      </li>
    </>
  );
};

export default Contact;
