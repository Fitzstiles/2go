import styles from "./Text.module.css";
const Textss = () => {
  return (
    <div className={styles.text__container}>
      <div className={styles.sender}>
        <p>Hello Austin</p>
        <small>12:56</small>
      </div>
      <div className={styles.sender}>
        <p>Hello Austin</p>
      </div>
      <div className={styles.sender}>
        <p>Hello Austin</p>
      </div>
      <div className={styles.receiver}>
        <p>Hi , How are you doing ?</p>
      </div>
    </div>
  );
};

export default Textss;
