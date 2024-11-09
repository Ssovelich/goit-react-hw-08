import styles from "./AppBar.module.css";
import { useSelector } from "react-redux";

import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
