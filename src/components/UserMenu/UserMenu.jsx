import styles from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { apiLogOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.wrap}>
      <p className={styles.userName}>Welcome, {user.name} </p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(apiLogOut())}
      >
        Logout
      </button>
    </div>
  );
};
