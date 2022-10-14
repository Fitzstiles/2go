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
  // const userProfile=[{

  // }]
  return (
    <div className={styles.userProfile}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <Link href="/">
            <ArrowBackIosNewIcon />
          </Link>
          <h2>Profile</h2>
        </div>
        <MoreVertIcon />
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
