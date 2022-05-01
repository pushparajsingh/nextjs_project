import Homepage from "../components/Homepage/Homepage.js";
import { metaTags } from "../constants.js";
import { SSRProvider } from "@react-aria/ssr";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <SSRProvider>
      {metaTags.HOME_PAGE}
      <div className={styles.container}>
        <Homepage />
      </div>
    </SSRProvider>
  );
}
