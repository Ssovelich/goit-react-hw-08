import { useDispatch, useSelector } from "react-redux";
import {
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

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const curetnContact = useSelector(selectCuretnContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#655247",
        }}
      >
        Phonebook
      </h1>
      {!curetnContact ? (
        <ContactForm />
      ) : (
        <ContactEditForm {...curetnContact} />
      )}
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && (
        <p>
          Oops, some error occured &quot;{error}&quot;. Please, try again later
          🤷‍♂️.
        </p>
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
