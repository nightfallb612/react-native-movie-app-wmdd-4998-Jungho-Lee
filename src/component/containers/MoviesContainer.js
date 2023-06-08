import { Container, Select, Box, Center, CheckIcon } from "native-base";
import { useEffect, useState } from "react";
import { getMovies } from "../../services/getMoviesService";
import Loading from "../layout/Loading";
import MovieList from "../lists/MovieList";
import { SELECT_BG } from "../../utils/colors";

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
    <Container maxWidth={"100%"}>
      <Box>
        <Center>
          <Select
            selectedValue={category}
            minWidth="50%"
            accessibilityLabel="Select Category"
            _selectedItem={{
              bg: SELECT_BG,
              endIcon: <CheckIcon size="5" />,
            }}
            my={6}
            onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          >
            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </Center>
        {isLoading ? <Loading /> : <MovieList medias={movies} type="movie" />}
      </Box>
    </Container>
  );
};

export default MoviesContainer;
