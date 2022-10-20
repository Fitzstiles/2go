import Link from "next/link";
import styles from "../styles/Home.module.css";
const getstarted = () => {
  return (
    <div className={styles.getStarted}>
      <h2>Welcome to 2go</h2>
      <p>Chat with friends and meet new people</p>
      <div className={styles.image__circle}>
        <div className={styles.centralize__image}>
          <div className={styles.left__images}>
            <div className={styles.circle__images}>
              <img
                src="https://static.wikia.nocookie.net/bighero6/images/c/c1/Tadashi.png/revision/latest/top-crop/width/360/height/450?cb=20190612034949"
                alt=""
              />
            </div>
            <div className={styles.circle__images}>
              <img
                src="https://www.irishexaminer.com/cms_media/module_img/275/137630_1_seoimage16x9_ie-401163_4bad92fd00a3493386706e00704e3488.jpg"
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
                src="https://www.irishexaminer.com/cms_media/module_img/275/137630_1_seoimage16x9_ie-401163_4bad92fd00a3493386706e00704e3488.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.right__images}>
            {/* image 1 */}
            <div className={styles.circle__images}>
              <img
                src="https://www.irishexaminer.com/cms_media/module_img/275/137630_1_seoimage16x9_ie-401163_4bad92fd00a3493386706e00704e3488.jpg"
                alt=""
              />
            </div>
            {/* image 2 */}
            <div className={styles.circle__images}>
              <img
                src="https://www.irishexaminer.com/cms_media/module_img/275/137630_1_seoimage16x9_ie-401163_4bad92fd00a3493386706e00704e3488.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Link href="/">Get Started</Link>
      </div>
    </div>
  );
};

export default getstarted;
