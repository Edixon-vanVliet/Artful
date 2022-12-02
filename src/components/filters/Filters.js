/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import styles from "./Filters.module.css";

const tabs = Object.freeze([
  "Todos",
  "Para ti",
  "Online",
  "Hoy",
  "Este fin de semana",
  "Gratuitos",
  "Caridad & Causas",
]);

export const Filters = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleClick = (event, tab) => {
    event.preventDefault();
    setCurrentTab(tab);
  };

  return (
    <section className={styles.filters}>
      {tabs.map((tab) => (
        <a
          key={tab}
          href="#"
          className={`${styles.link} ${currentTab === tab ? styles.active : ""}`}
          onClick={(event) => handleClick(event, tab)}
        >
          {tab}
        </a>
      ))}
    </section>
  );
};
