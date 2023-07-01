import Card from "../components/card";
import Menu from "../components/menu";

import { getMovie } from "../utils/movies";
import { RouteComponentProps } from "react-router-dom";
import { IonContent, IonPage, IonText } from "@ionic/react";
import styles from "./Movie.module.css";
interface Movie
  extends RouteComponentProps<{
    id: string;
  }> {}

const Movie: React.FC<Movie> = function ({ match }) {
  const movie = getMovie(match.params.id);

  return (
    <>
      <Menu></Menu>
      <IonPage id="main-content">
        <IonContent className="ion-padding">
          {movie && (
            <>
              <div className={styles.mx}>
                <Card movie={movie} showOverview={false}></Card>
                <p className={`${styles.prose} ion-margin`}>
                  <IonText color="warning">{movie.overview}</IonText>
                </p>
              </div>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Movie;
