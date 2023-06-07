import { FlatList } from "native-base";
import MediaCard from "../listItems/MediaCard";

const MultiTypeList = (props) => {
  const { medias, type } = props;

  return (
    <FlatList
      data={medias}
      renderItem={({ item }) => (
        <MediaCard
          id={item.id}
          image={item.poster_path}
          title={item.media_type == "movie" ? item.title : item.name}
          popularity={item.popularity}
          releaseDate={item.release_date}
          type={item.media_type}
        />
      )}
    />
  );
};

export default MultiTypeList;
