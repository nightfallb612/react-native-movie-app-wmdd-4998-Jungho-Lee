import { Box, Center, Heading, Image, Text, VStack, View } from "native-base";
import { useEffect, useState } from "react";
import { getVideo } from "../../services/getVideoService";
import { IMAGE_PREFIX } from "../../config/api_config";
import Loading from "../layout/Loading";

const ShowPageContainer = ({ route }) => {
  const { id, type } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [videoDetail, setVideoDetail] = useState("");

  console.group("route.params", route.params);

  const fetchVideo = (id, type) => {
    setIsLoading(true);

    getVideo(id, type).then(
      (video) => {
        setVideoDetail(video.data);
        setIsLoading(false);
        console.log("videoDetail:", video.data.poster_path);
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  useEffect(() => {
    fetchVideo(id, type);
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack space={4} paddingX={8}>
          <Center>
            <Heading marginY={8} size={"xl"}>
              {videoDetail.original_title}
            </Heading>
            <Box m={1}>
              <Image
                alt="error"
                source={{ uri: `${IMAGE_PREFIX}${videoDetail.poster_path}` }}
                size="2xl"
              />
            </Box>
            <Text marginY={6}>{videoDetail.overview}</Text>
            <Text m={1}>
              Popularity: {videoDetail.popularity} | Release Date:
              {videoDetail.release_date}
            </Text>
          </Center>
        </VStack>
      )}
    </Box>
  );
};

export default ShowPageContainer;
