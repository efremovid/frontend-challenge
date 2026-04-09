import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.track}></div>

      <div className={styles.cat}>
        🐈
      </div>
    </div>
    </div>
  );
};

export default Loader;