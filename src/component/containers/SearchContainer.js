import { Box, Center, Container, Heading, Text, View } from "native-base";
import SearchForm from "../forms/SearchForm";
import { useState } from "react";
import { getSearchResult } from "../../services/getSearchResultService";
import MovieList from "../lists/MovieList";
import Loading from "../layout/Loading";
import TVSeriesList from "../lists/TVSeriesList";
import MultiTypeList from "../lists/MultiTypeList";

const SearchContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchType, setSearchType] = useState(null);
  const [searchInputError, setSearchInputError] = useState(false);

  const fetchSearch = (type, inputValue, isInputError) => {
    setSearchInputError(isInputError);

    if (isInputError) {
      return;
    } else {
      setIsLoading(true);

      getSearchResult(type, inputValue).then(
        (ResultVideos) => {
          setVideos(ResultVideos.data.results);
          setSearchType(type);
          setIsLoading(false);
        },
        (error) => {
          alert("Error", `Something went wrong! ${error}`);
        }
      );
    }
  };

  return (
    <Container maxWidth={"100%"}>
      <Box>
        <Center px={4}>
          <SearchForm onSubmit={fetchSearch} />
        </Center>
        {isLoading ? (
          <Loading />
        ) : searchInputError ? (
          <Center mt={40}>
            <Heading>Please initiate a search</Heading>
          </Center>
        ) : searchType === "movie" ? (
          <MovieList medias={videos} type="movie" />
        ) : searchType === "tv" ? (
          <TVSeriesList tvSeries={videos} type="tv" />
        ) : (
          <MultiTypeList medias={videos} />
        )}
      </Box>
    </Container>
  );
};

export default SearchContainer;
