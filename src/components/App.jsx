import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import Loader from "./Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contactsData.loading);
  const error = useSelector((state) => state.contactsData.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;
