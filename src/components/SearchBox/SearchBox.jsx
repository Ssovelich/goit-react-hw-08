import styles from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = () => {
  const searchFieldId = useId();
  return (
    <div className={styles.searchWrap}>
      <label className={styles.searchLabel} htmlFor={searchFieldId}>
        Fild contacts by name
      </label>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        id={searchFieldId}
      />
    </div>
  );
};

export default SearchBox;
