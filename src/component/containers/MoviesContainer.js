import { Container, Select, Box, Center, CheckIcon } from "native-base";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMoviesService";
import Loading from "../layout/Loading";
import MovieList from "../lists/MovieList";

const MoviesContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("now_playing");

  const fetchMovies = (category) => {
    setIsLoading(true);

    getMovies(category).then(
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
    fetchMovies(category);
  }, [category]);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <Container>
      <Center width="full">
        <Box>
          <Select
            selectedValue={category}
            minWidth="200"
            accessibilityLabel="Select Category"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          >
            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </Box>
      </Center>
      {isLoading ? <Loading /> : <MovieList medias={movies} type="movie" />}
    </Container>
  );
};

export default MoviesContainer;
