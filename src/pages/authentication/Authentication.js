import React from "react";

import styles from "./Authentication.module.css";

export const Authentication = ({ type }) => {
  return (
    <div className={styles.authentication}>
      <div className={styles.formWrapper}>{type === "login" ? <LoginForm /> : <SignupForm />}</div>
      <div className={styles.imageWrapper}>
        <img src="/images/authentication.jpeg" alt="" />
      </div>
    </div>
  );
};

const LoginForm = () => (
  <>
    <h1 className={styles.title}>Iniciar sesión</h1>
    <form className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" />
      </div>
      <div className={styles.input}>
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" />
      </div>
      <button className={styles.button}>Iniciar sesión</button>
    </form>
  </>
);

const SignupForm = () => (
  <>
    <h1 className={styles.title}>Crear una cuenta</h1>
    <form className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="email">Correo electrónico</label>
        <input type="text" name="email" />
      </div>
      <button className={styles.button}>Registrarse</button>
    </form>
  </>
);
