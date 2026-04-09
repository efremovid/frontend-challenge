import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : "text"}`
          }
          to={"/"}
        >
          Все котики
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : "text"}`
          }
          to={"/favourites"}
        >
          Любимые котики
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
