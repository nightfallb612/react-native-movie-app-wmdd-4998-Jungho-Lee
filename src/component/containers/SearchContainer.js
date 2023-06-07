import { Center, Container } from "native-base";
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

  const fetchSearch = (type, inputValue) => {
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
  };

  return (
    <Container>
      <Center px={4}>
        <SearchForm onSubmit={fetchSearch} />
      </Center>
      {/* {isLoading ? (
        <Loading />
      ) : (
        <MovieList medias={videos} type={searchType} />
      )} */}
      {isLoading ? (
        <Loading />
      ) : searchType === "movie" ? (
        <MovieList medias={videos} type="movie" />
      ) : searchType === "tv" ? (
        <TVSeriesList tvSeries={videos} type="tv" />
      ) : (
        <MultiTypeList medias={videos} />
      )}
    </Container>
  );
};

export default SearchContainer;
