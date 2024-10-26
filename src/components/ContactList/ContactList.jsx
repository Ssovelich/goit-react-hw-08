import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  // Підписуємося на значення контастів зі стору
  const contacts = useSelector((state) => state.contactsData.contacts);
  // Підписуємося на значення фільтру зі стору
  const filters = useSelector((state) => state.filters.filters);

  // console.log(contacts);

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(filters.toLowerCase().trim()) ||
      contact.number.toLowerCase().includes(filters.toLowerCase().trim())
  );

  return (
    <div>
      <ul className={styles.contactList}>
        {visibleContacts.map((contact) => {
          return (
            <Contact
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
