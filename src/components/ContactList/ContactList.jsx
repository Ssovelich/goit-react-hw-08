import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={styles.contactList}>
        {visibleContacts.map((contact) => {
          return (
            <Contact
              created={contact.createdAt}
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
