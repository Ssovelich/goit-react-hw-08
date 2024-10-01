import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={styles.contactList}>
        {contacts.map((contact) => {
          return (
            <Contact
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
