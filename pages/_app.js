import "../styles/globals.css";
import Preloader from "../component/Preloader";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  });
  return <>{!loading ? <Preloader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
