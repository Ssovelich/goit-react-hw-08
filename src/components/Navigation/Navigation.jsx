import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";
import { IoHome } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectContacts } from "../../redux/contacts/selectors";

const buildStylesClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  console.log(contacts.length);
  // const totalContacts = length.contacts;
  // console.log(totalContacts);

  return (
    <nav>
      <NavLink className={buildStylesClasses} to="/">
        <IoHome size={25} /> Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildStylesClasses} to="/contacts">
          <IoIosContacts size={25} />
          Contacts: {contacts.length}
        </NavLink>
      )}
    </nav>
  );
};
