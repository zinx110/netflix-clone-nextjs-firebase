import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${show && styles.navbar_black}`}>
      <img
        className={styles.navbar_logo}
        src="/netflix_logo.png"
        alt="Netflix"
      />
      <img
        className={styles.navbar_avatar}
        src="/netflix_smile.png"
        alt="Netflix"
      />
    </div>
  );
};

export default Navbar;
