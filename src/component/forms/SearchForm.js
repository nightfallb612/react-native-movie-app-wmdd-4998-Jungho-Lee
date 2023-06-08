import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  Input,
  Select,
  VStack,
} from "native-base";
import { useState } from "react";
import { SELECT_BG } from "../../utils/colors";

const SearchForm = (props) => {
  const { onSubmit } = props;
  const [type, setType] = useState("movie");
  const [inputValue, setInputValue] = useState("");
  const [isInputError, setIsInputError] = useState(false);

  const onPressHandler = () => {
    if (inputValue.trim() === "") {
      setIsInputError(true);
      onSubmit(type, inputValue, true);
    } else {
      onSubmit(type, inputValue, isInputError);
    }
  };
  return (
    <VStack space={2} marginX={2} py={5}>
      <FormControl isRequired isInvalid={isInputError}>
        <FormControl.Label fontSize={"sm"}>
          Search Movie/TV Show Name
        </FormControl.Label>
        <Input
          placeholder="i.e. James Bond, CSI"
          variant={"filled"}
          bg={"gray.200"}
          // width={"100%"}
          InputLeftElement={
            <Icon
              size={5}
              ml={2}
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
          onChangeText={(value) => {
            setIsInputError(false);
            setInputValue(value);
          }}
        />
        <FormControl.Label fontSize={"sm"}>
          Choose Search Type
        </FormControl.Label>
        <HStack width={"100%"}>
          <Select
            marginRight={4}
            selectedValue={type}
            minWidth="200"
            accessibilityLabel="Select Type"
            _selectedItem={{
              bg: SELECT_BG,
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setType(itemValue)}
          >
            <Select.Item label="Movie" value="movie" />
            <Select.Item label="Multi" value="multi" />
            <Select.Item label="TV" value="tv" />
          </Select>
          <Button
            onPress={onPressHandler}
            startIcon={<Icon as={Ionicons} name="ios-search" />}
          >
            Search
          </Button>
        </HStack>

        {isInputError ? (
          <FormControl.ErrorMessage>
            Movie/TV show name is required
          </FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Please select a search type
          </FormControl.HelperText>
        )}
      </FormControl>
    </VStack>
  );
};

export default SearchForm;
