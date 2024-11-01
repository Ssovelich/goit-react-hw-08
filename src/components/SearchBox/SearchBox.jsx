import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { useId } from "react";
import { setFilters } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/contactsSlice";

const SearchBox = () => {
  // Підписуємося на значення фільтру зі стору
  const filters = useSelector(selectFilters);
  // Функція відправки команди
  const dispatch = useDispatch();

  // console.log(filters);

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
