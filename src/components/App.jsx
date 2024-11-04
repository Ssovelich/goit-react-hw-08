// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";
// import Loader from "./Loader/Loader";
// import { useEffect } from "react";
// import { fetchContacts } from "../redux/contacts/operations";
// import { selectError, selectLoading } from "../redux/contacts/selectors";

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

// import HomePage from "../pages/HomePage/HomePage";
// import LoginPage from "../pages/LoginPage/LoginPage";
// import RegisterPage from "../pages/RegisterPage/RegisterPage";
// import ContactsPage from "../pages/ContactsPage/ContactsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
