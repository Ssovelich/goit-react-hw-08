import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={styles.contactList}>
        {contacts.map((contactItem) => {
          return (
            <Contact
              key={contactItem.id}
              name={contactItem.name}
              number={contactItem.number}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
