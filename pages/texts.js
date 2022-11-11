import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../component/Text.module.css";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
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
      <div className={styles.textssss}>
        <div className={styles.xender}>
          <div>
            <p>Whats up bro ??</p>
            <small>12:22</small>
          </div>
        </div>
        <div className={styles.xender}>
          <div>
            <p>Whats up bro ??</p>
            <small>12:22</small>
          </div>
        </div>
        <div className={styles.receiver}>
          <div>
            <p>Im fine yoo</p>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              corrupti iste, quasi voluptatibus, sint harum architecto modi
              minus facilis numquam reiciendis aut voluptatem repudiandae?
              Molestias veritatis ullam minima. Quaerat, beatae.
            </p>
            <small>12:22</small>
          </div>
        </div>
        <div className={styles.xender}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              exercitationem quam tempore vitae facere perferendis deleniti
              voluptatum ea quo non minus illo, dolorum quisquam delectus. Eos
              expedita totam nobis cumque.
            </p>
            <small>12:22</small>
          </div>
        </div>
        <div className={styles.receiver}>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              corrupti iste, quasi voluptatibus, sint harum architecto modi
              minus facilis numquam reiciendis aut voluptatem repudiandae?
              Molestias veritatis ullam minima. Quaerat, beatae.
            </p>
            <small>12:22</small>
          </div>
        </div>
      </div>

      <div className={styles.input__section}>
        <textarea></textarea>
        {/* <input type="text" /> */}
        <InsertEmoticonIcon />
        <SendIcon />
      </div>
    </div>
  );
};

export default Textss;
