import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { useId } from "react";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const SearchBox = () => {
  // Підписуємося на значення фільтру зі стору
  const filters = useSelector(selectFilters);
  // Функція відправки команди
  const dispatch = useDispatch();

  const searchFieldId = useId();

  return (
    <div className={styles.searchWrap}>
      <label className={styles.searchLabel} htmlFor={searchFieldId}>
        Fild contacts by name or by number
      </label>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        placeholder="Write something..."
        value={filters}
        onChange={(event) => {
          const action = setFilters(event.target.value);
          dispatch(action);
        }}
        id={searchFieldId}
      />
    </div>
  );
};

export default SearchBox;
