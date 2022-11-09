import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../component/Text.module.css";
const Textss = () => {
  return (
    <div className={styles.text__container}>
      <div className={styles.chat__header}>
        <Link href="/chat">
          <ArrowBackIcon />
        </Link>
        <div className="user__img">
          <img
            src="https://www.caa.com/caaspeakers/partyHeadshot/hailee-steinfeld.png"
            alt=""
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
        </div>
      </div>
      <div className={styles.xender}>
        <div>
          <p>What's up bro ??</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.xender}>
        <div>
          <p>What's up bro ??</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.receiver}>
        <div>
          <p>I'm fine yoo</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.xender}>
        <div>
          <p>Had dinner yet ??</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.receiver}>
        <div>
          <p>No bro, just about to</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.receiver}>
        <div>
          <p>where your girl at ?</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.xender}>
        <div>
          <p>Right here man</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.receiver}>
        <div>
          <p>Tha's cool bro</p>
          <small>12:22</small>
        </div>
      </div>
      <div className={styles.xender}>
        <div>
          <p>Yeah man</p>
          <small>12:22</small>
        </div>
      </div>
    </div>
  );
};

export default Textss;
