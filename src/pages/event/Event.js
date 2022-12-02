import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artworks } from "../../components/artworks";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { events } from "../../events";

import styles from "./Event.module.css";

export const Event = () => {
  const { id } = useParams();
  const [imageDimensions, setImageDimensions] = useState({ height: 0, width: 0 });

  const [event, setEvent] = useState({
    id: 0,
    title: "",
    image: "",
    dates: "",
    description: [],
    entree: "",
    location: "",
    people: "",
    organizers: [],
    artists: [],
    artworks: [],
  });

  useEffect(() => {
    if (id) {
      setEvent(events.find((event) => event.id === parseInt(id)));
    }
  }, [id]);

  useEffect(() => {
    const image = new Image();
    image.src = event.image;

    image.onload = () => {
      setImageDimensions({ height: image.height, width: image.width });
    };
  }, [event.image]);
  return (
    <>
      <Header />
      <div
        className={styles.imageWrapper}
        style={{ width: imageDimensions.width / 0.7, height: imageDimensions.height / 0.9 }}
      >
        <div className={styles.blurredImage} style={{ backgroundImage: `url(${event.image})` }}></div>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${event.image})`,
            width: imageDimensions.width,
            height: imageDimensions.height,
          }}
        ></div>
      </div>
      <main className={styles.main}>
        <div style={{ flexBasis: "70%" }}>
          <section>
            <h2>{event.title}</h2>
          </section>
          <section className={styles.description}>
            {event.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        </div>
        <section style={{ flexBasis: "30%", paddingTop: 0 }}>
          <section>
            <p>
              <strong>Organizado por:</strong> {event.organizers.join(", ")}
            </p>
            <p>
              <strong>Artistas:</strong> {event.artists.join(", ")}
            </p>
          </section>
          <section>
            <p>
              <strong>Fechas:</strong> {event.dates}
            </p>
            <p>
              <strong>Lugar:</strong> {event.location}
            </p>
            <p>
              <strong>Entrada:</strong> {event.entree}
            </p>
          </section>
          <section>
            <span>{event.people} seguidores</span>
            <button className={styles.follow}>Seguir</button>
          </section>
          <section>
            <button className={styles.button}>Reservar un lugar</button>
          </section>
        </section>
      </main>
      {!!event.artworks.length && (
        <>
          <hr />
          <aside>
            <h2 style={{ marginBottom: 30 }}>Obras</h2>
            <Artworks artworks={event.artworks} />
            <section style={{ display: "flex", justifyContent: "center" }}>
              <button className={styles.button} style={{ maxWidth: 350 }}>
                Comprar una obra
              </button>
            </section>
          </aside>
        </>
      )}
      <Footer />
    </>
  );
};
