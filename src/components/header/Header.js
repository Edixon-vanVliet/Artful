/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>
          <Link to="/">Artful</Link>
        </h1>
        <div className={styles.search}>
          <span className="fa-solid fa-magnifying-glass" style={{ marginLeft: 12 }}></span>
          <input className={styles.input} type="text" placeholder="Buscar evento" />
        </div>
      </div>
      <nav className={styles.nav}>
        <Link to={"/create-event"} className={`${styles.createEvent} ${styles.link}`}>
          Crear Evento
        </Link>
        <Link to={"/login"} className={styles.link}>
          Iniciar sesión
        </Link>
        <Link to={"/signup"} className={styles.link}>
          Registrarse
        </Link>
      </nav>
    </header>
  );
};
