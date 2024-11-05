import DocumentTitle from "../../components/DocumentTitle";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={styles.title}>Phonebook welcome page🎉</h1>
      </div>
    </div>
  );
};

export default HomePage;
