import { View, Text } from "native-base";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMoviesService";

const MoviesContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setIsLoading(true);

    getMovies("now_playing");

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View>
      <Text>Movie</Text>
    </View>
  );
};

export default MoviesContainer;
