import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export default function ButtonAppBar() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>
          <Link className={styles.noDeco} to={"/"}>
            UNED Pelis
          </Link>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
