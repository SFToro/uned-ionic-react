import MOVIES from "../assets/movies.json";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const getMovie = (id: string) => {
  const movie =
    MOVIES.find((movie) => {
      return `${movie.id}` === id;
    }) ?? null;
  return movie;
};

export const getMovies = () => MOVIES;
