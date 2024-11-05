import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildStylesClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={buildStylesClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildStylesClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
