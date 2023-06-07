import { FlatList } from "native-base";
import MediaCard from "../listItems/MediaCard";

const MediaList = (props) => {
  const { medias, type } = props;
  return (
    <FlatList
      data={medias}
      renderItem={({ item }) => (
        <MediaCard
          id={item.id}
          image={item.poster_path}
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.release_date}
          type={type}
        />
      )}
    />
  );
};

export default MediaList;
