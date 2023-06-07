import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text, VStack } from "native-base";
import { IMAGE_PREFIX } from "../../config/api_config";

const MediaCard = (props) => {
  const { id, image, title, popularity, releaseDate, type } = props;
  const navigation = useNavigation();
  return (
    <Box>
      <VStack direction={"row"} space={1}>
        <Box>
          <Image
            alt="error"
            source={{ uri: `${IMAGE_PREFIX}${image}` }}
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
                  navigation.navigate("detail", { id, type, title });
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
