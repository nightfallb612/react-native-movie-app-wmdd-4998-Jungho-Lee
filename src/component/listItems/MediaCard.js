import { useNavigation } from "@react-navigation/native";
import { Box, Button, HStack, Heading, Image, Text, VStack } from "native-base";
import { IMAGE_PREFIX } from "../../config/api_config";

const MediaCard = (props) => {
  const { id, image, title, popularity, releaseDate, type } = props;
  const navigation = useNavigation();
  return (
    <Box paddingY={2} paddingLeft={4}>
      <HStack space={1}>
        <Box>
          <Image
            alt={title}
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
      </HStack>
    </Box>
  );
};

export default MediaCard;
