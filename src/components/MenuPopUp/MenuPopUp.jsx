import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./MenuPopUp.module.css";
import { useDispatch } from "react-redux";
import { apiLogOut } from "../../redux/auth/operations";
import { useEffect } from "react";

const MenuPopUp = ({ onBackdropClick, userEmail, onCloseMenuPopUp }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseMenuPopUp();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onCloseMenuPopUp]);

  return (
    <div onClick={onBackdropClick} className={styles.backdrop}>
      <div className={styles.popUp}>
        <p className={styles.userEmail}>
          <FaUser className={styles.icon} /> {userEmail}
        </p>
        <hr
          style={{
            border: "1px solid #bfa181",
            margin: "10px 0",
          }}
        />
        <a
          className={styles.logOut}
          type="button"
          onClick={() => dispatch(apiLogOut())}
        >
          <RiLogoutBoxRLine className={styles.icon} /> Logout
        </a>
      </div>
    </div>
  );
};

export default MenuPopUp;
