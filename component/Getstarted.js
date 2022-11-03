import Link from "next/link";
import styles from "../styles/Home.module.css";
const Getstarted = () => {
  return (
    <div className={styles.getStarted}>
      <h2>Welcome to 2go</h2>
      <p>Chat with friends and meet new people</p>
      <div className={styles.image__circle}>
        <div className={styles.centralize__image}>
          <div className={styles.left__images}>
            <div className={styles.circle__images}>
              <img
                src="https://i.quotev.com/u/15/3/30/t/microbots_tadashi_hamada_x_reader_by_musicmaniac427-d87bu49.jpg"
                alt=""
              />
            </div>
            <div className={styles.circle__images}>
              <img
                src="https://64.media.tumblr.com/2a0f4b910b984401f6c537440fc7dff5/80bdb9a44f0ba38d-73/s1280x1920/37f95c315e6c205c68197d8e90a9bd0a729b0205.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.center__images}>
            {/* image1 */}
            <div className={styles.circle__images}>
              <img
                src="https://helios-i.mashable.com/imagery/articles/03B8sCaco1vG1045n5VtFrp/hero-image.fill.size_1200x1200.v1611614292.jpg"
                alt=""
              />
            </div>
            <div className={styles.image__container}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/e/e8/2go_Chat_Logo%2C_2go_Interactive.png"
                alt=""
              />
            </div>
            {/* image2 */}
            <div className={styles.circle__images}>
              <img
                src="https://i.quotev.com/img/q/u/18/4/2/i5ypr3tnhs.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.right__images}>
            {/* image 1 */}
            <div className={styles.circle__images}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZZHdIx6ej66M1tU0x4Fy5TphQsTMYXYv71-XGIrlm5wWKuwQ7x0dGlhXzGyLYfyNrB4&usqp=CAU"
                alt=""
              />
            </div>
            {/* image 2 */}
            <div className={styles.circle__images}>
              <img
                src="https://www.everythingmouse.com/wp-content/uploads/2020/04/flynn-rider.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Link href="/chat">Get Started</Link>
      </div>
    </div>
  );
};

export default Getstarted;
