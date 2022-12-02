import React from "react";
import { Card } from "../card";

import styles from "./Events.module.css";

export const Events = ({ events }) => {
  return (
    <section className={styles.events}>
      {events.map((event) => (
        <Card key={event.id} {...event} />
      ))}
    </section>
  );
};
