import { useState } from "react";
import { Header } from "../../components/header";
import { Filters } from "../../components/filters";
import { Events } from "../../components/events";
import { Footer } from "../../components/footer";
import { events } from "../../events";

import styles from "./Home.module.css";

export const Home = () => {
  const [moreEvents, setMoreEvents] = useState(events.slice(0, 8));

  const handleClick = () => {
    setMoreEvents((prev) => [...prev, ...events.slice(prev.length, prev.length + 4)]);
  };

  return (
    <>
      <Header />
      <div className={styles.banner}>
        <img src="/images/banner.jpg" alt="banner" />
      </div>
      <main>
        <section>
          <h2>
            Popular en&nbsp;&nbsp;
            <span className={styles.location}>
              <span className="fa-solid fa-chevron-down fa-2xs">&nbsp;&nbsp;</span>
              <span className={styles.city}>Distrito Nacional</span>
            </span>
          </h2>
        </section>
        <Filters />

        <h3>Eventos en el Distrito Nacional</h3>
        <Events events={events.slice(0, 8)} />
      </main>
      <hr />

      <aside>
        <h3>Mas eventos</h3>
        <Events events={moreEvents} />
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={handleClick}>
            {moreEvents.length === events.length ? "Todos los eventos cargados" : "Ver mas"}
          </button>
        </div>
      </aside>

      <hr className={styles.hr} />
      <Footer />
    </>
  );
};
