import { Center, Container, Box, Select, CheckIcon } from "native-base";
import { useEffect, useState } from "react";
import { getTVSeries } from "../../services/getTVSeriesService";
import Loading from "../layout/Loading";
import TVSeriesList from "../lists/TVSeriesList";
import { SELECT_BG } from "../../utils/colors";

const TVShowContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tvSeries, setTVSeries] = useState([]);
  const [category, setCategory] = useState("airing_today");

  const fetchTVSeries = (category) => {
    setIsLoading(true);

    getTVSeries(category).then(
      (tvSeries) => {
        setTVSeries(tvSeries.data.results);
        setIsLoading(false);
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  useEffect(() => {
    fetchTVSeries(category);
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
            minWidth="70%"
            accessibilityLabel="Select Category"
            _selectedItem={{
              bg: SELECT_BG,
              endIcon: <CheckIcon size="5" />,
            }}
            my={6}
            onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          >
            <Select.Item label="Airing Today" value="airing_today" />
            <Select.Item label="On The Air" value="on_the_air" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
          </Select>
        </Center>
        {isLoading ? (
          <Loading />
        ) : (
          <TVSeriesList tvSeries={tvSeries} type="tv" />
        )}
      </Box>
    </Container>
  );
};

export default TVShowContainer;
