import { getMovies } from "../utils/movies";
import Card from "../components/card";
import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../components/nav";

// 5 movies by default
function Pelis({ qty = 5 }) {
  const movies = getMovies();
  return (
    <>
      <Nav></Nav>
      <div id="pelis">
        {movies?.length > 0 &&
          movies.slice(0, qty).map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Card movie={movie}></Card>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Pelis;
