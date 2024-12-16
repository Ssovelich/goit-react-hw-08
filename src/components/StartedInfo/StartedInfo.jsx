import styles from "./StartedInfo.module.css";

const StartedInfo = () => {
  return (
    <div>
      <hr
        style={{
          border: "1px solid #bfa181",
          margin: "10px 0",
        }}
      />
      <h2 className={styles.startedTitle}>Get started with Phonebook</h2>
      <p className={styles.startedText}>
        To access your personal phone book and manage your contacts, please
        create a free account or log in to an existing one.
      </p>
      <div>
        <a href="/register" className={styles.link}>
          Register
        </a>
        <span className={styles.prompt}>
          &nbsp;Sign up in just a few simple steps and start organizing your
          contacts today.
        </span>
      </div>
      <div>
        <a href="/login" className={styles.link}>
          Login
        </a>
        <span className={styles.prompt}>
          &nbsp;Already have an account? Log in to continue managing your
          contacts.
        </span>
      </div>
    </div>
  );
};

export default StartedInfo;
