import { NativeBaseProvider } from "native-base";
import IndexScreen from "./src/component/screens/IndexScreen";

const App = () => {
  return (
    <NativeBaseProvider>
      <IndexScreen />
    </NativeBaseProvider>
  );
};

export default App;
