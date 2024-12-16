import styles from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import PhonebookImage from "../../assets/depositphotos_8138615-stock-photo-old-style-phone-over-yellow.jpg";
import { FiCheckSquare } from "react-icons/fi";
import StartedInfo from "../../components/StartedInfo/StartedInfo";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={styles.title}>Welcome to the Phonebook App 🎉</h1>
        <img
          className={styles.img}
          src={PhonebookImage}
          alt="Phonebook image"
        />
      </div>
      <div>
        <h2 className={styles.descriptionText}>
          Phonebook App is a simple contact management solution that helps you
          quickly and easily store, find and manage your contacts. Create, edit
          and delete contacts with just a few clicks.
        </h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <FiCheckSquare className={styles.icon} />
            &nbsp;User-friendly and intuitive interface
          </li>
          <li className={styles.listItem}>
            <FiCheckSquare className={styles.icon} />
            &nbsp;Secure storage of your data
          </li>
          <li className={styles.listItem}>
            <FiCheckSquare className={styles.icon} />
            &nbsp;Fast search by name or number
          </li>
        </ul>
        {!isLoggedIn && <StartedInfo />}
      </div>
    </div>
  );
};

export default HomePage;
