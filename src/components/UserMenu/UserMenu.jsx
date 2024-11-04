import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  return (
    <div className={styles.wrapper}>
      {/* <p className={styles.username}>Welcome, {user.name} </p> */}
      <p className={styles.username}>Welcome, user.name </p>
      <button type="button">
        {/* <button type="button" onClick={() => dispatch(logOut())}> */}
        Logout
      </button>
    </div>
  );
};
