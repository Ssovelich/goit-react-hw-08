import styles from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectCuretnContact,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";
import ContactEditForm from "../../components/ContactEditForm/ContactEditForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const curetnContact = useSelector(selectCuretnContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      {!curetnContact ? (
        <ContactForm />
      ) : (
        <ContactEditForm {...curetnContact} />
      )}
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && (
        <p className={styles.text}>
          Oops, some error occured &quot;{error}&quot;. Please, try again later
          🤷‍♂️.
        </p>
      )}
      {Array.isArray(contacts) && contacts.length === 0 && (
        <p className={styles.text}>
          There are no contacts in your phonebook yet!
        </p>
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
