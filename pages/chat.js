import Head from "next/head";
import Link from "next/link";
import Message from "../component/Messgage";
import Navigation from "../component/Navigation";
import StatusUpdates from "../component/Status";
import styles from "../styles/Home.module.css";
const Chat = () => {
  <Head>
    <title>2go</title>
    <meta name="description" content="Generated by create next app" />
    <link
      rel="icon"
      href="https://mir-s3-cdn-cf.behance.net/projects/max_808/ba2df257215135.Y3JvcCw3MDksNTU1LDAsMA.png"
    />
  </Head>;
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h2>2GO</h2>
          <div className={styles.profile__icon}>
            <Link href="/profile">
              <img
                src="https://www.irishexaminer.com/cms_media/module_img/275/137630_1_seoimage16x9_ie-401163_4bad92fd00a3493386706e00704e3488.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className={styles.input_section}>
          <input type="text" placeholder="search for chat" />
        </div>
      </div>
      <StatusUpdates />
      <Navigation />
      <Message />
    </div>
  );
};

export default Chat;
