import Link from "next/link";
import styles from "../styles/Home.module.css";
const getstarted = () => {
  return (
    <div className={styles.getStarted}>
      <h2>Welcome to 2go</h2>
      <p>Chat with friends and meet new people</p>
      <div className={styles.button}>
        <Link href="/">Get Started</Link>
      </div>
    </div>
  );
};

export default getstarted;
