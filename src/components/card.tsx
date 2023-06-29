import type { Movie } from "../utils/movies";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import "./card.css";

export default function MediaCard({
  movie,
  showOverview = false,
}: {
  movie: Movie;
  showOverview?: boolean;
}) {
  return (
    <IonCard>
      <img
        alt={`Póster de la película ${movie.title}`}
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
      />
      <IonCardHeader>
        <IonCardTitle>{movie.title}</IonCardTitle>
        <IonCardSubtitle>{`${movie.vote_average}`}</IonCardSubtitle>
      </IonCardHeader>

      {showOverview && (
        <IonCardContent>
          <p>{movie.overview}</p>
        </IonCardContent>
      )}
    </IonCard>
  );
}
