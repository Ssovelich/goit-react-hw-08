import styles from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { apiFetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(apiFetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
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
