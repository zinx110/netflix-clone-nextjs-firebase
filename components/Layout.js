import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Head>
        <title>Netflix & Chill</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
