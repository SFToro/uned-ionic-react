import Card from "../components/card";
import { getMovie } from "../utils/movies";
import { Link, RouteComponentProps } from "react-router-dom";
import "./Movie.css";
import ButtonLink from "../components/button-link.jsx";
interface Movie
  extends RouteComponentProps<{
    id: string;
  }> {}

const Movie: React.FC<Movie> = function ({ match }) {
  const movie = getMovie(match.params.id);

  return (
    <div id="peli">
      {movie && <Card movie={movie}></Card>}

      <Link to={"/"}>
        <ButtonLink text="Volver" />{" "}
      </Link>
    </div>
  );
};

export default Movie;
