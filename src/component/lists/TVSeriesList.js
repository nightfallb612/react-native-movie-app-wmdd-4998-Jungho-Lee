import { FlatList } from "native-base";
import MediaCard from "../listItems/MediaCard";

const TVSeriesList = (props) => {
  const { tvSeries, type } = props;

  return (
    <FlatList
      data={tvSeries}
      renderItem={({ item }) => (
        <MediaCard
          id={item.id}
          image={item.poster_path}
          title={item.name}
          popularity={item.popularity}
          type={type}
        />
      )}
    />
  );
};

export default TVSeriesList;
