import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={styles.contactList}>
        {visibleContacts?.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              // id={contact.id}
              // name={contact.name}
              // number={contact.number}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
