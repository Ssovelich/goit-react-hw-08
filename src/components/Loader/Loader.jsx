import styles from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#56382d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
