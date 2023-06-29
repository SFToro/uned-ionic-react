import { getMovies } from "../utils/movies";
import Card from "../components/card";
import Menu from "../components/menu";
import Nav from "../components/nav";

import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { IonContent, IonPage } from "@ionic/react";

// 5 movies by default
function Pelis({ qty = 5 }) {
  const movies = getMovies();
  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <Nav />
        <IonContent className="ion-padding">
          <div className={styles.pelis}>
            {movies?.length > 0 &&
              movies.slice(0, qty).map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <Card movie={movie} showOverview></Card>
                </Link>
              ))}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Pelis;
