import { Center, Container, Box, Select, CheckIcon } from "native-base";
import { useEffect, useState } from "react";
import { getTVSeries } from "../../services/getTVSeriesService";
import Loading from "../layout/Loading";
import TVSeriesList from "../lists/TVSeriesList";

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
            <Select.Item label="Airing Today" value="airing_today" />
            <Select.Item label="On The Air" value="on_the_air" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
          </Select>
        </Box>
      </Center>
      {isLoading ? <Loading /> : <TVSeriesList tvSeries={tvSeries} type="tv" />}
    </Container>
  );
};

export default TVShowContainer;
