import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import clsx from "clsx";

const buildStylesClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildStylesClasses} to="/register">
        Register
      </NavLink>
      <NavLink className={buildStylesClasses} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
