import styles from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

import { selectUser } from "../../redux/auth/selectors";
import { useState } from "react";
import MenuPopUp from "../MenuPopUp/MenuPopUp";

export const UserMenu = () => {
  const user = useSelector(selectUser);

  const [isOpenMenuPopUp, setIsOpenMenuPopUp] = useState(false);

  const onOpenMenuPopUp = () => {
    setIsOpenMenuPopUp(true);
    document.body.style.paddingRight = "37px";
  };

  const onCloseMenuPopUp = () => {
    setIsOpenMenuPopUp(false);
    document.body.style.paddingRight = "20px";
  };

  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseMenuPopUp();
    }
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.userName}>Welcome, {user.name} </p>
      <button
        className={styles.btnAvatar}
        onClick={onOpenMenuPopUp}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Account settings"
      >
        {user.name[0].toUpperCase()}
      </button>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#2f4f4f", color: "#ffffff" }}
      />
      {isOpenMenuPopUp && (
        <MenuPopUp
          onCloseMenuPopUp={onCloseMenuPopUp}
          userEmail={user.email}
          onBackdropClick={onBackdropClick}
        />
      )}
    </div>
  );
};
