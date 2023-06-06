import { View, Text, Container } from "native-base";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMoviesService";
import Loading from "../layout/Loading";
import MediaList from "../lists/MediaList";

const MoviesContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setIsLoading(true);

    getMovies("now_playing").then(
      (movies) => {
        setMovies(movies.data.results);
        setIsLoading(false);
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      {isLoading ? <Loading /> : <MediaList medias={movies} />}
    </Container>
  );
};

export default MoviesContainer;
