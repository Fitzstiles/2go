import styles from "../styles/Home.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import ManIcon from "@mui/icons-material/Man";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WcIcon from "@mui/icons-material/Wc";
import Link from "next/link";

const Profile = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.profile__header}>
        <div className={styles.profile}>
          <Link href="/">
            <ArrowBackIosNewIcon />
          </Link>
          <h2>Profile</h2>
        </div>
        <MoreVertIcon />
      </div>
      <div className={styles.profile__set}>
        <div className={styles.profile__image}>
          <img
            src="https://www.irishexaminer.com/cms_media/module_img/275/137630_1_seoimage16x9_ie-401163_4bad92fd00a3493386706e00704e3488.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.profile__details}>
        <div className={styles.badges}>
          <BeenhereIcon />
          <StarIcon />
        </div>
        <span>Online</span>
      </div>
      <div className="user__details">
        <div className={styles.name}>
          <PersonIcon />
          <div className="info">
            <p>Username</p>
            <p>Anna44</p>
          </div>
        </div>
        <div className={styles.name}>
          <ManIcon />
          <div className="info">
            <p>Gender</p>
            <p>Female</p>
          </div>
        </div>
        <div className={styles.name}>
          <ManIcon />
          <div className="info">
            <p>Age</p>
            <p>22</p>
          </div>
        </div>
        <div className={styles.name}>
          <LocationOnIcon />
          <div className="info">
            <p>Location</p>
            <p>Enugu</p>
          </div>
        </div>
        <div className={styles.name}>
          <WcIcon />
          <div className="info">
            <p>Relationship status</p>
            <p>Single</p>
          </div>
        </div>
        <div className={styles.name}>
          <WcIcon />
          <div className="info">
            <p>Star level</p>
            <p>Veteran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
