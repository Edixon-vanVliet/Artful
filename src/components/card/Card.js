import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";

export const Card = ({ id, title, image, dates, description, entree, location, people }) => {
  return (
    <Link to={`/events/${id}`} className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.dates}>{dates}</p>
        <div className={styles.description}>{description}</div>
        <p className={styles.entree}>Entrada: {entree}</p>
        <p className={styles.location}>{location}</p>
        <p>
          <span className="fa-solid fa-user-tie">&nbsp;&nbsp;</span>
          {people} seguidores
        </p>
      </div>
    </Link>
  );
};
