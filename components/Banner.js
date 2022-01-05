import styles from "./Banner.module.css";
import React from "react";

const Banner = ({ bannerMovie }) => {
  console.log(bannerMovie);

  function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
        <h1 className={styles.banner_description}>
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className={styles.banner_fadeBottom} />
    </header>
  );
};

export default Banner;
