import styles from "./Chats.module.css";
const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <h2>Chats</h2>
        <h2>Rooms</h2>
        <h2>Friends</h2>
      </div>
    </div>
  );
};

export default Navigation;
