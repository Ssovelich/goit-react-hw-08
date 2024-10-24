import { useState } from "react";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
// import initialContacts from "../contacts.json";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // Підписуємося на значення контастів зі стору
  const contacts = useSelector((state) => state.contactsData.contacts);
  // Функція відправки команди
  const dispatch = useDispatch();

  // console.log(contacts);

  const [filter, setFilter] = useState("");

  function addContact(newContact) {
    const finalContact = { ...newContact };
    const action = { type: "contacts/addContact", payload: finalContact };
    dispatch(action);
  }

  function deleteContact(contactId) {
    const action = { type: "contacts/deleteContact", payload: contactId };
    dispatch(action);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
