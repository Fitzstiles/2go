import styles from "./Preloader.module.css";
const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808/ba2df257215135.Y3JvcCw3MDksNTU1LDAsMA.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Preloader;
