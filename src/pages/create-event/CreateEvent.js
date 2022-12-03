import React from "react";
import { Header } from "../../components/header/Header";

import styles from "./CreateEvent.module.css";

export const CreateEvent = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Crear Evento</h1>
          <form enctype="multipart/form-data">
            <div className={styles.form}>
              <div>
                <div className={styles.input}>
                  <label htmlFor="title">Titulo</label>
                  <input type="text" name="title" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="organizers">Organizadores</label>
                  <input type="text" name="organizers" />
                </div>
                <div className={styles.input}>
                  <label htmlFor="artists">Artistas</label>
                  <input type="text" name="artists" />
                </div>
                <div className={styles.textarea}>
                  <label htmlFor="description">Descripción</label>
                  <textarea type="text" name="description" />
                </div>
              </div>
              <div>
                <div className={styles.input}>
                  <label htmlFor="location">Lugar</label>
                  <input type="text" name="location" />
                </div>
                <div className={styles.dateWrapper}>
                  <div className={styles.date}>
                    <label htmlFor="startDate">Desde</label>
                    <input type="date" name="startDate" />
                  </div>
                  <div className={styles.date}>
                    <label htmlFor="endDate">Hasta</label>
                    <input type="date" name="endDate" />
                  </div>
                </div>
                <div className={styles.input}>
                  <label htmlFor="price">Precio</label>
                  <input type="text" name="price" />
                </div>
                <div className={styles.image}>
                  <label htmlFor="image">Imagen</label>
                  <input type="file" name="image" />
                </div>
                <div className={styles.image}>
                  <label htmlFor="image">Obras</label>
                  <input type="file" name="image" multiple />
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button>Publicar evento</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
