import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text, VStack } from "native-base";

const MediaCard = (props) => {
  const { id, image, title, popularity, releaseDate } = props;
  const navigation = useNavigation();
  console.log("props", props);
  return (
    <Box>
      <VStack direction={"row"} space={1}>
        <Box>
          <Image
            alt="error"
            source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
            size="xl"
          />
        </Box>
        <Box>
          <VStack>
            <Heading size={"xs"}>{title}</Heading>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {releaseDate}</Text>
            <Box p={2}>
              <Button
                onPress={() => {
                  navigation.navigate("detail", { id });
                }}
              >
                More Details
              </Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default MediaCard;
