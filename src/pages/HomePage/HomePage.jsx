import styles from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={styles.title}>Welcome to the Phonebook App 🎉</h1>
      </div>
    </div>
  );
};

export default HomePage;
