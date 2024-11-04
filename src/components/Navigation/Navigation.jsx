import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const buildStylesClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={buildStylesClasses} to="/">
        Home
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink className={buildStylesClasses} to="/contacts">
          Contacts
        </NavLink>
      )} */}

      <NavLink className={buildStylesClasses} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
