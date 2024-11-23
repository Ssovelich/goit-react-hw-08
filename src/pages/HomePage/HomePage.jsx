import styles from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import PhonebookImage from "../../assets/depositphotos_8138615-stock-photo-old-style-phone-over-yellow.jpg";

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
