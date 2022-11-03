import styles from "../styles/Home.module.css";
import Person2Icon from "@mui/icons-material/Person2";
const SignUp = () => {
  return (
    <div>
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
      <button>click me</button>
    </div>
  );
};

export default SignUp;
