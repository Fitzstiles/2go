import styles from "../styles/Home.module.css";
import Person2Icon from "@mui/icons-material/Person2";
import Link from "next/link";
const onboarding = () => {
  return (
    <div className={styles.onboarding__container}>
      <div className={styles.email}>
        <p>
          <Person2Icon />
          Email
        </p>
        <input type="email" placeholder="Enter your rmail" />
      </div>

      <div className={styles.password}>
        <p>Password</p>
        <input type="password" placeholder="Enter your password" />
      </div>

      <div className={styles.username}>
        <p>Username</p>
        <input type="text" placeholder="Select username" />
      </div>

      <div className={styles.gender}>
        <p>Gender</p>
        <label>
          <input type="checkbox" />
          Male
        </label>
        <label>
          <input type="checkbox" />
          Female
        </label>
      </div>
      <div className={styles.relationship}>
        <p>Relationship status</p>
        <label>
          <input type="checkbox" />
          Single
        </label>
        <label>
          <input type="checkbox" />
          Married
        </label>
        <label>
          <input type="checkbox" />
          Complicated
        </label>
      </div>
      <Link href="/">Continue</Link>
    </div>
  );
};

export default onboarding;
