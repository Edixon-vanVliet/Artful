import React from "react";

import styles from "./Artworks.module.css";

export const Artworks = ({ artworks }) => {
  return (
    <div className={styles.artworks}>
      {artworks.map((artwork) => (
        <img className={styles.image} src={artwork} alt="" />
      ))}
    </div>
  );
};
